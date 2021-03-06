import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { RadioGroup } from 'aqueduct-components';

// constants
import { SCENARIO_OPTIONS } from 'constants/app';

class Future extends PureComponent {
  handleModal({ value }) {
    const { openModal } = this.props;

    openModal(value);
  }

  render() {
    const {
      indicators,
      currentIndicator,
      scenario,
      setFilters
    } = this.props;

    return (
      <div className="c-future">
        <div className="future-group">
          <div className="layerlist-header">
            <span className="future-title">
              Indicators
            </span>
          </div>
          <RadioGroup
            name="indicator"
            items={indicators}
            onChange={({ value }) => { setFilters({ indicator: value }); }}
            selected={currentIndicator}
            className="-secondary"
            onInfo={(item) => { this.handleModal(item); }}
            iconClass="-secondary"
          />
        </div>
        <div className="future-group">
          <span className="future-title">Scenario</span>
          <p>Future water availibility depends on how the world grows. These possible scenarios are based on the IPCC 5th assessment report.</p>
          <RadioGroup
            name="scenario"
            items={SCENARIO_OPTIONS}
            onChange={({ value }) => { setFilters({ scenario: value }); }}
            selected={scenario}
            className="-inline -secondary"
          />
        </div>
      </div>
    );
  }
}

Future.propTypes = {
  scenario: PropTypes.string.isRequired,
  indicators: PropTypes.array.isRequired,
  currentIndicator: PropTypes.string.isRequired,
  setFilters: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

export default Future;
