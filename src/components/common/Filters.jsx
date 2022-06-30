/* eslint-disable no-nested-ternary */
import { useDidMount } from 'hooks';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { applyFilter, resetFilter } from 'redux/actions/filterActions';
import { selectMax, selectMin } from 'selectors/selector';
import YearRange from './YearRange';

const Filters = ({ closeModal }) => {
  const { filter, isLoading, products } = useSelector((state) => ({
    filter: state.filter,
    isLoading: state.app.loading,
    products: state.products.items
  }));
  const [field, setFilter] = useState({
    artist: filter.artist,
    minYear: filter.minYear,
    maxYear: filter.maxYear,
    sortBy: filter.sortBy
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const didMount = useDidMount();

  const max = selectMax(products);
  const min = selectMin(products);

  useEffect(() => {
    if (didMount && window.screen.width <= 480) {
      history.push('/');
    }

    if (didMount && closeModal) closeModal();

    setFilter(filter);
    window.scrollTo(0, 0);
  }, [filter]);


  const onYearChange = (minVal, maxVal) => {
    setFilter({ ...field, minYear: minVal, maxYear: maxVal });
  };

  const onartistFilterChange = (e) => {
    const val = e.target.value;

    setFilter({ ...field, artist: val });
  };

  const onSortFilterChange = (e) => {
    setFilter({ ...field, sortBy: e.target.value });
  };

  const onApplyFilter = () => {
    const isChanged = Object.keys(field).some((key) => field[key] !== filter[key]);

    if (field.minYear > field.maxYear) {
      return;
    }

    if (isChanged) {
      dispatch(applyFilter(field));
    } else {
      closeModal();
    }
  };

  const onResetFilter = () => {
    const filterFields = ['artist', 'minYear', 'maxYear', 'sortBy'];

    if (filterFields.some((key) => !!filter[key])) {
      dispatch(resetFilter());
    } else {
      closeModal();
    }
  };

  return (
    <div className="filters">
      <div className="filters-field">
        <span>artist</span>
        <br />
        <br />
        {products.length === 0 && isLoading ? (
          <h5 className="text-subtle">Loading Filter</h5>
        ) : (
          <select
            className="filters-artist"
            value={field.artist}
            disabled={isLoading || products.length === 0}
            onChange={onartistFilterChange}
          >
            <option value="">All artists</option>
            <option value="David Smith">David Smith</option>
            <option value="Roy Lichtenstein">Roy Lichtenstein</option>
          </select>
        )}
      </div>
      <div className="filters-field">
        <span>Sort By</span>
        <br />
        <br />
        <select
          className="filters-sort-by d-block"
          value={field.sortBy}
          disabled={isLoading || products.length === 0}
          onChange={onSortFilterChange}
        >
          <option value="">None</option>
          <option value="name-asc">Name Ascending A - Z</option>
          <option value="name-desc">Name Descending Z - A</option>
          <option value="Year-desc">Year High - Low</option>
          <option value="Year-asc">Year Low - High</option>
        </select>
      </div>
      <div className="filters-field">
        <span>Year Produced </span>
        <br />
        <br />
        {(products.length === 0 && isLoading) || max === 0 ? (
          <h5 className="text-subtle">Loading Filter</h5>
        ) : products.length === 1 ? (
          <h5 className="text-subtle">No Year Range</h5>
        ) : (
          <YearRange
            min={min}
            max={max}
            initMin={field.minYear}
            initMax={field.maxYear}
            isLoading={isLoading}
            onYearChange={onYearChange}
            productsCount={products.length}
          />
        )}
      </div>
      <div className="filters-action">
        <button
          className="filters-button button button-small"
          disabled={isLoading || products.length === 0}
          onClick={onApplyFilter}
          type="button"
        >
          Apply filters
        </button>
        <button
          className="filters-button button button-border button-small"
          disabled={isLoading || products.length === 0}
          onClick={onResetFilter}
          type="button"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
};

Filters.propTypes = {
  closeModal: PropType.func.isRequired
};

export default withRouter(Filters);
