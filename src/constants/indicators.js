export const INDICATORS = [
  {
    id: 'w_awr_def_tot_cat',
    name: 'Overall Water Risk',
    overall: true,
    children: [
      {
        id: 'w_awr_def_qan_cat',
        name: 'Water Quantity Risk',
        children: [
          {
            id: 'bws_cat',
            name: 'Baseline Water Stress',
            ponderation: true
          },
          {
            id: 'bwd_cat',
            name: 'Baseline Water Depletion',
            ponderation: true
          },
          {
            id: 'gtd_cat',
            name: 'Groundwater Table Decline',
            ponderation: true
          },
          {
            id: 'iav_cat',
            name: 'Interannual Variability',
            ponderation: true
          },
          {
            id: 'sev_cat',
            name: 'Seasonal Variability',
            ponderation: true
          },
          {
            id: 'drr_cat',
            name: 'Drought Risk',
            ponderation: true
          },
          {
            id: 'rfr_cat',
            name: 'Riverine Flood Risk',
            ponderation: true
          },
          {
            id: 'cfr_cat',
            name: 'Coastal Flood Risk',
            ponderation: true
          }
        ]
      },
      {
        id: 'w_awr_def_qal_cat',
        name: 'Water Quality Risk',
        children: [
          {
            id: 'ucw_cat',
            name: 'Untreated Collected Wastewater',
            ponderation: true
          },
          {
            id: 'cep_cat',
            name: 'Coastal Eutrophication Potential',
            ponderation: true
          }
        ]
      },
      {
        id: 'w_awr_def_rrr_cat',
        name: 'Regulatory and Reputational',
        children: [
          {
            id: 'udw_cat',
            name: 'Unimproved/no drinking water',
            ponderation: true
          },
          {
            id: 'usa_cat',
            name: 'Unimproved/no sanitation',
            ponderation: true
          },
          {
            id: 'rri_cat',
            name: 'RepRisk Index',
            ponderation: true
          }
        ]
      }
    ]
  }
];

export const FUTURE_INDICATORS = {
  bs: [
    // projected change in water stress
    {
      id: '5aafeab1-4b48-40b0-9042-f654f1531aaf',
      name: 'Water Stress'
    },
      // projected change in seasonal variability
    {
      id: '45a1f9c5-7b0b-4705-978f-1e98dc8b3277',
      name: 'Seasonal Variability'
    },
    // projected change in water supply
    {
      id: 'c124cfce-0414-4cf3-ba2d-e63634199b04',
      name: 'Water Supply'
    },
    // projected change in water demand
    {
      id: 'a3795c06-d2eb-4aa3-8e24-62965b69e5ce',
      name: 'Water Demand'
    }
  ],
  absolute: [
    // projected water stress
    {
      id: 'd5c8316c-de80-4be3-a973-d3fbafc7eaca',
      name: 'Water Stress'
    },
    // projected seasonal variability
    {
      id: 'd7d5fd18-e8e4-4654-b595-7accbb582992',
      name: 'Seasonal Variability'
    },
    // projected water supply
    {
      id: 'a045b21a-c2ff-4ec5-b7fa-2c1f206b8911',
      name: 'Water Supply'
    },
    // projected water demand
    {
      id: 'cf7e6a51-3366-42d7-a8ae-ef0f1f11a5f1',
      name: 'Water Demand'
    }
  ]
};

export const INDICATOR_NAMES_RELATION = {
  w_awr_def_tot_cat: 'Overall Water Risk',
  w_awr_def_qan_cat: 'Water Quantity Risk',
  w_awr_def_qal_cat: 'Water Quality Risk',
  w_awr_def_rrr_cat: 'Regulatory and Reputational',
  // Water Quantity Risk
  bws_cat: 'Baseline Water Stress',
  bwd_cat: 'Baseline Water Depletion',
  gtd_cat: 'Groundwater Table Decline',
  iav_cat: 'Interannual Variability',
  sev_cat: 'Seasonal Variability',
  drr_cat: 'Drought Risk',
  rfr_cat: 'Riverine Flood Risk',
  cfr_cat: 'Coastal Flood Risk',
  // Water Quality Risk
  ucw_cat: 'Untreated Collected Wastewater',
  cep_cat: 'Coastal Eutrophication Potential',
  // Regulatory and Reputational
  udw_cat: 'Unimproved/no drinking water',
  usa_cat: 'Unimproved/no sanitation',
  rri_cat: 'RepRisk Index',
  // future
  '5aafeab1-4b48-40b0-9042-f654f1531aaf': 'Water Stress',
  '45a1f9c5-7b0b-4705-978f-1e98dc8b3277': 'Seasonal Variability',
  'c124cfce-0414-4cf3-ba2d-e63634199b04': 'Water Supply',
  'a3795c06-d2eb-4aa3-8e24-62965b69e5ce': 'Water Demand',
  'd5c8316c-de80-4be3-a973-d3fbafc7eaca': 'Water Stress',
  'd7d5fd18-e8e4-4654-b595-7accbb582992': 'Seasonal Variability',
  'a045b21a-c2ff-4ec5-b7fa-2c1f206b8911': 'Water Supply',
  'cf7e6a51-3366-42d7-a8ae-ef0f1f11a5f1': 'Water Demand'
};

export const INDICATOR_DESCRIPTIONS = {
  w_awr_def_tot_cat: {
    name: INDICATOR_NAMES_RELATION.w_awr_def_tot_cat,
    description: `Overall water risk identifies areas with higher exposure to water-related risks
      and is an aggregated measure of all selected indicators from the Physical Quantity, Quality and
      Regulatory & Reputational Risk categories.`,
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    }]
  },
  w_awr_def_qan_cat: {
    name: INDICATOR_NAMES_RELATION.w_awr_def_qan_cat,
    description: `Physical risks related to quantity identify areas of concern regarding water quantity
    (e.g. droughts or floods) that may impact short or long term water availability.`,
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    }]
  },
  w_awr_def_qal_cat: {
    name: INDICATOR_NAMES_RELATION.w_awr_def_qal_cat,
    description: `Physical risks related to quality identify areas of concern regarding water quality
      that may impact short or long term water availability.`,
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    }]
  },
  w_awr_def_rrr_cat: {
    name: INDICATOR_NAMES_RELATION.w_awr_def_rrr_cat,
    description: `Regulatory and reputational risks identify areas of concern regarding uncertainty
      in regulatory change, as well as conflicts with the public regarding water issues.`,
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    }]
  },
  // Water Quantity Risk
  bws_cat: {
    name: INDICATOR_NAMES_RELATION.bws_cat,
    description: `Baseline water stress measures the ratio of total annual water withdrawals to total available
      annual renewable supply, accounting for upstream consumptive use. Higher values indicate more competition among users.`,
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    },
    { name: 'FAO AQUASTAT 2008-2012' },
    { name: 'NASA GLDAS-2 2012' },
    { name: 'Shiklomanov and Rodda 2004' },
    { name: 'Flörke et al. 2012' },
    { name: 'Matsutomi et al. 2009' }
    ]
  },
  bwd_cat: {
    name: INDICATOR_NAMES_RELATION.bwd_cat,
    description: 'TBD',
    sources: []
  },
  gtd_cat: {
    name: INDICATOR_NAMES_RELATION.gtd_cat,
    description: `Groundwater stress measures the relative ratio of groundwater withdrawal to recharge rate.
      Values above one indicate where unsustainable groundwater consumption could affect groundwater availability
      and groundwater-dependent ecosystems.`,
    sources: [
      { name: 'Gleeson' },
      { name: 'Wada' },
      { name: 'Bierkens' },
      { name: 'van Beek 2012' }
    ]
  },
  iav_cat: {
    name: INDICATOR_NAMES_RELATION.iav_cat,
    description: 'Inter-annual variability measures the variation in water supply from year-to-year.',
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    },
    { name: 'NASA GLDAS-2 2012' }
    ]
  },
  sev_cat: {
    name: INDICATOR_NAMES_RELATION.sev_cat,
    description: 'Seasonal variability measures variation in water supply between months of the year.',
    sources: [{
      name: 'WRI Aqueduct 2014',
      link: 'https://www.wri.org/publication/aqueduct-global-maps-21-indicators'
    },
    { name: 'NASA GLDAS-2 2012' }
    ]
  },
  drr_cat: {
    name: INDICATOR_NAMES_RELATION.drr_cat,
    description: `Drought severity estimates the average of the length times the dryness of droughts
      from 1901 to 2008. Drought is defined as a continuous period where soil moisture remains below the
      20th percentile, length is measured in months, and dryness is the number of percentage points
      below the 20th percentile.`,
    sources: [{ name: 'Sheffield and Wood 2007' }]
  },
  rfr_cat: {
    name: INDICATOR_NAMES_RELATION.rfr_cat,
    description: 'TBD',
    sources: []
  },
  cfr_cat: {
    name: INDICATOR_NAMES_RELATION.gtd_cat,
    description: 'TBD',
    sources: []
  },
  // Water Quality Risk
  ucw_cat: {
    name: INDICATOR_NAMES_RELATION.ucw_cat,
    description: 'TBD',
    sources: []
  },
  cep_cat: {
    name: INDICATOR_NAMES_RELATION.cep_cat,
    description: 'TBD',
    sources: []
  },
  // Regulatory and Reputational
  udw_cat: {
    name: INDICATOR_NAMES_RELATION.udw_cat,
    description: 'TBD',
    sources: []
  },
  usa_cat: {
    name: INDICATOR_NAMES_RELATION.usa_cat,
    description: 'TBD',
    sources: []
  },
  rri_cat: {
    name: INDICATOR_NAMES_RELATION.rri_cat,
    description: 'TBD',
    sources: []
  },
  // future
  '5aafeab1-4b48-40b0-9042-f654f1531aaf': {
    name: INDICATOR_NAMES_RELATION['5aafeab1-4b48-40b0-9042-f654f1531aaf'],
    description: `Projected change in water stress shows how development and/or climate change are expected to
      affect water stress, the ratio of water use to supply. The "business as usual" scenario (SSP2 RCP8.5) represents
      a world with stable economic development and steadily rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  '45a1f9c5-7b0b-4705-978f-1e98dc8b3277': {
    name: INDICATOR_NAMES_RELATION['45a1f9c5-7b0b-4705-978f-1e98dc8b3277'],
    description: `Projected change in seasonal variability shows how climate change is expected to affect the variability of water supply
      between the months of the year. The "business as usual" scenario (SSP2 RCP8.5) represents a world with stable economic development and
      steadily rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  'c124cfce-0414-4cf3-ba2d-e63634199b04': {
    name: INDICATOR_NAMES_RELATION['c124cfce-0414-4cf3-ba2d-e63634199b04'],
    description: `Projected change in water supply shows how climate change is expected to affect water supply.
      The "business as usual" scenario (SSP2 RCP8.5) represents a world with stable economic development and steadily
      rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  'a3795c06-d2eb-4aa3-8e24-62965b69e5ce': {
    name: INDICATOR_NAMES_RELATION['a3795c06-d2eb-4aa3-8e24-62965b69e5ce'],
    description: `Projected change in water demand shows how development and/or climate change are expected to affect water demand.
      The "business as usual" scenario (SSP2 RCP8.5) represents a world with stable economic development and steadily rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  'd5c8316c-de80-4be3-a973-d3fbafc7eaca': {
    name: INDICATOR_NAMES_RELATION['d5c8316c-de80-4be3-a973-d3fbafc7eaca'],
    description: `Projected change in water stress shows how development and/or climate change are expected to
      affect water stress, the ratio of water use to supply. The "business as usual" scenario (SSP2 RCP8.5) represents
      a world with stable economic development and steadily rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  'd7d5fd18-e8e4-4654-b595-7accbb582992': {
    name: INDICATOR_NAMES_RELATION['d7d5fd18-e8e4-4654-b595-7accbb582992'],
    description: `Projected change in seasonal variability shows how climate change is expected to affect the variability of water supply
      between the months of the year. The "business as usual" scenario (SSP2 RCP8.5) represents a world with stable economic development and
      steadily rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  'a045b21a-c2ff-4ec5-b7fa-2c1f206b8911': {
    name: INDICATOR_NAMES_RELATION['a045b21a-c2ff-4ec5-b7fa-2c1f206b8911'],
    description: `Projected change in water supply shows how climate change is expected to affect water supply.
      The "business as usual" scenario (SSP2 RCP8.5) represents a world with stable economic development and steadily
      rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  },
  'cf7e6a51-3366-42d7-a8ae-ef0f1f11a5f1': {
    name: INDICATOR_NAMES_RELATION.rri_cat,
    description: `Projected change in water demand shows how development and/or climate change are expected to affect water demand.
      The "business as usual" scenario (SSP2 RCP8.5) represents a world with stable economic development and steadily rising global carbon emissions.`,
    sources: [{
      name: 'WRI 2015',
      link: 'https://www.wri.org/publication/aqueduct-water-stress-projections-decadal-projections-water-supply-and-demand-using'
    }]
  }
};

// relates children layers with its parent in a straight way
export const PARENT_CHILDREN_LAYER_RELATION = {
  // Water Quantity Risk
  bws_cat: 'w_awr_def_qan_cat',
  bwd_cat: 'w_awr_def_qan_cat',
  gtd_cat: 'w_awr_def_qan_cat',
  iav_cat: 'w_awr_def_qan_cat',
  sev_cat: 'w_awr_def_qan_cat',
  drr_cat: 'w_awr_def_qan_cat',
  rfr_cat: 'w_awr_def_qan_cat',
  cfr_cat: 'w_awr_def_qan_cat',
  // Water Quality Risk
  ucw_cat: 'w_awr_def_qal_cat',
  cep_cat: 'w_awr_def_qal_cat',
  // Regulatory and Reputational
  udw_cat: 'w_awr_def_rrr_cat',
  usa_cat: 'w_awr_def_rrr_cat',
  rri_cat: 'w_awr_def_rrr_cat'
};

export const INDICATOR_COLUMNS = {
  // common columns for all indicators
  common: [
    { label: 'Name', value: '' },
    { label: 'Country', value: '' },
    { label: 'River Basin', value: '' }
  ],
  // Overall Water Risk
  w_awr_def_tot_cat: [{ label: 'Overall Water Risk', value: 'w_awr_def_tot_cat' }],
  // Water Quantity Risk
  w_awr_def_qan_cat: [
    { label: 'Water Quantity Risk', value: 'bws_cat' },
    { label: 'Baseline Water Stress', value: 'bwd_cat' },
    { label: 'Groundwater Table Decline', value: 'gtd_cat' },
    { label: 'Interannual Variability', value: 'iav_cat' },
    { label: 'Seasonal Variability', value: 'sev_cat' },
    { label: 'Drought Risk', value: 'drr_cat' },
    { label: 'Riverine Flood Risk Stress', value: 'rfr_cat' },
    { label: 'Coastal Flood Risk', value: 'cfr_cat' }
  ],
  // Water Quality Risk
  w_awr_def_qal_cat: [
    { label: 'Water Quality Risk', value: 'w_awr_def_qal_cat' },
    { label: 'Untreated Collected Wastewater', value: 'ucw_cat' },
    { label: 'Coastal Eutrophication Potential', value: 'cep_cat' }
  ],
  // Regulatory and Reputational
  w_awr_def_rrr_cat: [
    { label: 'Regulatory and Reputational', value: 'w_awr_def_rrr_cat' },
    { label: 'Unimproved/no drinking water', value: 'udw_cat' },
    { label: 'Unimproved/no sanitation', value: 'usa_cat' },
    { label: 'RepRisk Index', value: 'rri_cat' }
  ],
  projected_change: [
    { label: 'Projected Change In {{indicator}} ({{projection}} To {{year}} {{scenario}} )', value: 'rri_cat' }
  ],
  // monthly exclusive
  monthly: {
    bws_cat: [{ label: 'Water Quantity Risk', value: 'bws_cat' }],
    bwd_cat: [{ label: 'Baseline Water Stress', value: 'bwd_cat' }],
    iav_cat: [{ label: 'Interannual Variability', value: 'iav_cat' }]
  }
};

export const INDICATOR_SCHEME_ORDER = [
  'bws_cat', 'bwd_cat', 'gtd_cat', 'iav_cat',
  'sev_cat', 'drr_cat', 'rfr_cat', 'cfr_cat',
  'ucw_cat', 'cep_cat', 'udw_cat', 'usa_cat', 'rri_cat'
];

export const EXCLUSIVE_MONTHLY_INDICATORS = ['bws_cat', 'bwd_cat', 'iav_cat'];

export const DEFAULT_FUTURE_INDICATOR = {
  bs: '5aafeab1-4b48-40b0-9042-f654f1531aaf',
  absolute: 'd5c8316c-de80-4be3-a973-d3fbafc7eaca'
};

export const DEFAULT_FUTURE_YEAR = '2030';

export const FUTURE_INDICATORS_IDS = [...FUTURE_INDICATORS.bs, ...FUTURE_INDICATORS.absolute].map(_indicator => _indicator.id);

export const ANALYZER_LOCATION_INDICATORS = [
  INDICATORS[0],
  ...INDICATORS[0].children,
  {
    name: 'Projected change',
    isFuture: true,
    // this id will change based on user's selection
    id: DEFAULT_FUTURE_INDICATOR.bs
  }
];

export default {
  INDICATORS,
  FUTURE_INDICATORS,
  PARENT_CHILDREN_LAYER_RELATION,
  INDICATOR_COLUMNS,
  INDICATOR_NAMES_RELATION,
  INDICATOR_DESCRIPTIONS,
  INDICATOR_SCHEME_ORDER,
  EXCLUSIVE_MONTHLY_INDICATORS,
  DEFAULT_FUTURE_INDICATOR,
  DEFAULT_FUTURE_YEAR,
  FUTURE_INDICATORS_IDS,
  ANALYZER_LOCATION_INDICATORS
};
