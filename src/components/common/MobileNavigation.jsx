import { BasketToggle } from 'components/basket';
import { SHOP } from 'constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Badge from './Badge';
import FiltersToggle from './FiltersToggle';

const Navigation = (props) => {
  const { basketLength} = props;
  const { pathname } = useLocation();


  return (
    <nav className="mobile-navigation">
      <div className="mobile-navigation-main">
        <div className="mobile-navigation-logo">
          <Link onClick={onClickLink} to={SHOP}>
          </Link>
        </div>

        <BasketToggle>
          {({ onClickToggle }) => (
            <button
              className="button-link navigation-menu-link basket-toggle"
              onClick={onClickToggle}
              disabled={disabledPaths.includes(pathname)}
              type="button"
            >

              <Badge count={basketLength}>
                <i className="fa fa-shopping-bag" style={{ fontSize: '2rem' }} />
              </Badge>
            </button>
          )}
        </BasketToggle>
      </div>
      <div className="mobile-navigation-sec">
        <FiltersToggle>
          <button className="button-link button-small" type="button">
            <i className="fa fa-filter" />
          </button>
        </FiltersToggle>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  basketLength: PropType.number.isRequired,
};

export default Navigation;
