/**
 * Temporary solution for organizing strings in the codebase until a blocking
 * issue in `remix-i18next` is resolved:
 * https://github.com/sergiodxa/remix-i18next/issues/143
 */
export const i18n = {
  about: 'About',
  aboutAndHelp: 'About & Help',
  accelerationVoltage: 'Acceleration Voltage',
  additionalMicroscopeOpticalSetup: 'Additional microscope optical setup',
  affiliationName: 'Affiliation Name',
  api: 'API',
  authors: 'Authors',
  browseData: 'Browse Data',
  cameraManufacturer: 'Camera Manufacturer',
  cameraModel: 'Camera Model',
  cellLineOrStrainName: 'Cell Line or Strain Name',
  cellName: 'Cell Name',
  cellularComponent: 'Cellular Component',
  citations: 'Citations',
  cookiePolicy: 'Cookie Policy',
  datasetCount: (count: number, max: number) => `${count} of ${max} datasets`,
  datasetDetails: 'Dataset details',
  datasetMetadata: 'Dataset Metadata',
  datasets: 'Datasets',
  datasetsTab: (count: number) => `Datasets ${count}`,
  depositionDate: 'Deposition Date',
  documentation: 'Documentation',
  energyFilter: 'Energy Filter',
  faq: 'FAQ',
  fundingAgency: 'Funding Agency',
  github: 'GitHub',
  goToDocs: 'Go to Documentation',
  grantID: 'Grant ID',
  gridPreparation: 'Grid Preparation',
  helpAndReport: 'Help & Report',
  howToCite: 'How to cite',
  imageCorrector: 'Image Corrector',
  keyPhoto: 'key photo',
  lastModified: (date: string) => `Last Modified: ${date}`,
  license: 'License',
  metadata: 'Metadata',
  microscopeManufacturer: 'Microscope Manufacturer',
  microscopeModel: 'Microscope model',
  napariPlugin: 'napari Plugin',
  notSubmitted: 'Not Submitted',
  organismName: 'Organism Name',
  otherSetup: 'Other Setup',
  phasePlate: 'Phase Plate',
  plusMore: (count: number) => `+${count} More`,
  portalId: (id: number | string) => `Portal ID: ${id}`,
  portalIdBlank: 'Portal ID:',
  privacy: 'Privacy',
  privacyPolicy: 'Privacy Policy',
  publications: 'Publications',
  relatedDatabases: 'Related Databases',
  releaseDate: (date: string) => `Release Date: ${date}`,
  reportIssueOnGithub: 'Report Issue on GitHub',
  runs: 'Runs',
  runsTab: (count: number) => `Runs ${count}`,
  sampleAndExperimentConditions: 'Sample and Experiment Conditions',
  samplePreparation: 'Sample Preparation',
  sampleType: 'Sample Type',
  search: 'Search',
  showLess: 'Show Less',
  sphericalAberrationConstant: 'Spherical Aberration Constant',
  submitFeedback: 'Submit Feedback',
  terms: 'Terms',
  termsOfUse: 'Terms of Use',
  tiltSeries: 'Tilt-Series',
  tissueName: 'Tissue Name',
  title: 'CryoET Data Portal',
  tools: 'Tools',
}
