/* eslint-disable no-nested-ternary */
import { CloseCircleOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { applyFilter } from 'redux/actions/filterActions';

const ProductAppliedFilters = ({ filteredProductsCount }) => {
  const filter = useSelector((state) => state.filter, shallowEqual);
  const fields = ['artist', 'minYear', 'maxYear', 'sortBy', 'keyword'];
  const isFiltered = fields.some((key) => !!filter[key]);
  const dispatch = useDispatch();

  const onRemoveKeywordFilter = () => {
    dispatch(applyFilter({ keyword: '' }));
  };

  const onRemoveYearRangeFilter = () => {
    dispatch(applyFilter({ minYear: 0, maxYear: 0 }));
  };

  const onRemoveartistFilter = () => {
    dispatch(applyFilter({ artist: '' }));
  };

  const onRemoveSortFilter = () => {
    dispatch(applyFilter({ sortBy: '' }));
  };

  return !isFiltered ? null : (
    <>
      <div className="product-list-header">
        <div className="product-list-header-title">
          <h5>
            {filteredProductsCount > 0
              && `Found ${filteredProductsCount} ${filteredProductsCount > 1 ? 'products' : 'product'}`}
          </h5>
        </div>
      </div>
      <div className="product-applied-filters">
        {filter.keyword && (
          <div className="pill-wrapper">
            <span className="d-block">Keyword</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.keyword}</h5>
              <div className="pill-remove" onClick={onRemoveKeywordFilter} role="presentation">
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.artist && (
          <div className="pill-wrapper">
            <span className="d-block">artist</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.artist}</h5>
              <div className="pill-remove" onClick={onRemoveartistFilter} role="presentation">
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {(!!filter.minYear || !!filter.maxYear) && (
          <div className="pill-wrapper">
            <span className="d-block">Year Range</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                $
                {filter.minYear}
                - $
                {filter.maxYear}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemoveYearRangeFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.sortBy && (
          <div className="pill-wrapper">
            <span className="d-block">Sort By</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                {filter.sortBy === 'Year-desc'
                  ? 'Year High - Low'
                  : filter.sortBy === 'Year-asc'
                    ? 'Year Low - High'
                    : filter.sortBy === 'name-desc'
                      ? 'Name Z - A'
                      : 'Name A - Z'}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemoveSortFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

ProductAppliedFilters.defaultProps = {
  filteredProductsCount: 0
};

ProductAppliedFilters.propTypes = {
  filteredProductsCount: PropType.number
};

export default ProductAppliedFilters;
