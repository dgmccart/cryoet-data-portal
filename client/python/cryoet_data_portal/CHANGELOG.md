# Changelog

## [5.0.0](https://github.com/dgmccart/cryoet-data-portal/compare/cryoet-data-portal-python-client-v4.3.0...cryoet-data-portal-python-client-v5.0.0) (2025-02-10)


### ⚠ BREAKING CHANGES

* Initial support for apiv2 (https://github.com/chanzuckerberg/cryoet-data-portal/pull/1085)

### ✨ Features

* add size fields to TiltSeries ([#1406](https://github.com/dgmccart/cryoet-data-portal/issues/1406)) ([3b8e709](https://github.com/dgmccart/cryoet-data-portal/commit/3b8e709a5d44be4085be54c780723fb6910fb521))
* add user agent to client requests ([#966](https://github.com/dgmccart/cryoet-data-portal/issues/966)) ([8209cd4](https://github.com/dgmccart/cryoet-data-portal/commit/8209cd46cb8ab21341c7ee94672db3bae78f9aa2))
* codegeneration for docstrings ([#1307](https://github.com/dgmccart/cryoet-data-portal/issues/1307)) ([cf0a008](https://github.com/dgmccart/cryoet-data-portal/commit/cf0a0085bf39965bf06b7318af347f50eb0f9b32))
* Generate Python client code using GraphQL introspection ([#1008](https://github.com/dgmccart/cryoet-data-portal/issues/1008)) ([35b7265](https://github.com/dgmccart/cryoet-data-portal/commit/35b72656e77132c9d64cc077705da8940bb29e44))
* Initial support for apiv2 (https://github.com/chanzuckerberg/cryoet-data-portal/pull/1085) ([fec4000](https://github.com/dgmccart/cryoet-data-portal/commit/fec400066d03361f68a9a12865842b83930f410c))
* Support a Client object being shared between threads. ([#1351](https://github.com/dgmccart/cryoet-data-portal/issues/1351)) ([ebdc7db](https://github.com/dgmccart/cryoet-data-portal/commit/ebdc7db5069303b8d63481fdee990936c02b2a6a))


### 🐞 Bug Fixes

* create recursive_from_prefix path if it does not exist ([#940](https://github.com/dgmccart/cryoet-data-portal/issues/940)) ([0069f08](https://github.com/dgmccart/cryoet-data-portal/commit/0069f080987ac05efef82d024cb17f4dc307a0f3))
* Don't dowload too many annotation metadata files ([#639](https://github.com/dgmccart/cryoet-data-portal/issues/639)) ([69d9a68](https://github.com/dgmccart/cryoet-data-portal/commit/69d9a687fbc830b9edcc74c9c91fe133551a3fac))
* fix argument and return value handling for get_by_id ([#1380](https://github.com/dgmccart/cryoet-data-portal/issues/1380)) ([2504e4d](https://github.com/dgmccart/cryoet-data-portal/commit/2504e4d8c5aaf5eae1afb69f24b62c77b2843d08))
* Fix generated examples formatting ([#1369](https://github.com/dgmccart/cryoet-data-portal/issues/1369)) ([6cf8473](https://github.com/dgmccart/cryoet-data-portal/commit/6cf847348365aa1f24f62123c4a50c9cb97ab25d))
* Fixes for relationship field naming. ([#1348](https://github.com/dgmccart/cryoet-data-portal/issues/1348)) ([703d470](https://github.com/dgmccart/cryoet-data-portal/commit/703d470787420c1f24f731004c6b62b5a13126a4))
* Merge query filters properly ([#820](https://github.com/dgmccart/cryoet-data-portal/issues/820)) ([8555301](https://github.com/dgmccart/cryoet-data-portal/commit/8555301d7bac6b5b08046a079bd272fa732a4eee))
* Raise exception when attempting to filter on related objects. ([#642](https://github.com/dgmccart/cryoet-data-portal/issues/642)) ([14b7f58](https://github.com/dgmccart/cryoet-data-portal/commit/14b7f58fcf3ea29f2511743ae5578524fcb9876b))
* Remove duplicated tooltip from Annotated Objects list ([#1460](https://github.com/dgmccart/cryoet-data-portal/issues/1460)) ([a42889e](https://github.com/dgmccart/cryoet-data-portal/commit/a42889e933efb0cbb56a7d7825bf4199c40bdcd1))
* update client tomogram documentation ([#560](https://github.com/dgmccart/cryoet-data-portal/issues/560)) ([d6d8e87](https://github.com/dgmccart/cryoet-data-portal/commit/d6d8e8722606516da878f8247e7e0309cc1d5153))
* Use match with substring for exception check in client tests ([#895](https://github.com/dgmccart/cryoet-data-portal/issues/895)) ([07352ec](https://github.com/dgmccart/cryoet-data-portal/commit/07352ecdb8c6f50ffe97ff7be9777c0cf6dd66cb))
* wait for graphql to be healthy in client tests ([#1044](https://github.com/dgmccart/cryoet-data-portal/issues/1044)) ([65f0a4b](https://github.com/dgmccart/cryoet-data-portal/commit/65f0a4b76783ad32bbe439f62fc32f0cae3ae646)), closes [#942](https://github.com/dgmccart/cryoet-data-portal/issues/942)


### 📝 Documentation

* Add python client release docs to this repo ([#673](https://github.com/dgmccart/cryoet-data-portal/issues/673)) ([c156f8e](https://github.com/dgmccart/cryoet-data-portal/commit/c156f8e1b6b9b469d3d71405a2f0eeef5c439995))
* Final edits before ML Challenge ([#1313](https://github.com/dgmccart/cryoet-data-portal/issues/1313)) ([a675983](https://github.com/dgmccart/cryoet-data-portal/commit/a67598344265d7dbec52ff5c1bfce79a3dd2dd2d))
* Move documentation site to Sphinx Immaterial ([#1087](https://github.com/dgmccart/cryoet-data-portal/issues/1087)) ([5d549dc](https://github.com/dgmccart/cryoet-data-portal/commit/5d549dce37e69c1e9ddbf76c8cfaf28581419cda))


### 🧹 Miscellaneous Chores

* Add additional test case to TestGetDestinationPath ([#955](https://github.com/dgmccart/cryoet-data-portal/issues/955)) ([a9412a8](https://github.com/dgmccart/cryoet-data-portal/commit/a9412a80f3b24ff94b0803fdd59d3583b4521706))
* add instructions and commands to manually release the python package. ([#1073](https://github.com/dgmccart/cryoet-data-portal/issues/1073)) ([4833eb9](https://github.com/dgmccart/cryoet-data-portal/commit/4833eb95d32ee06a5608e69d6aebf013b1c9fd73))
* automate release of python client ([#972](https://github.com/dgmccart/cryoet-data-portal/issues/972)) ([073bff7](https://github.com/dgmccart/cryoet-data-portal/commit/073bff7180e2ac3b390cac6a5665b63a7f00e472))
* docs formatting fixes ([#616](https://github.com/dgmccart/cryoet-data-portal/issues/616)) ([958b553](https://github.com/dgmccart/cryoet-data-portal/commit/958b553821bc5582d972cb5a3689937e2cfea38d))
* **main:** release cryoet-data-portal-python-client 3.1.0 ([#1071](https://github.com/dgmccart/cryoet-data-portal/issues/1071)) ([811716f](https://github.com/dgmccart/cryoet-data-portal/commit/811716f4fc3263e6cda085e454f47a540d5f3efc))
* **main:** release cryoet-data-portal-python-client 3.1.1 ([#1119](https://github.com/dgmccart/cryoet-data-portal/issues/1119)) ([596e2a3](https://github.com/dgmccart/cryoet-data-portal/commit/596e2a380a9091484cef05c377f1f56c8027a568))
* **main:** release cryoet-data-portal-python-client 4.0.0 ([#1288](https://github.com/dgmccart/cryoet-data-portal/issues/1288)) ([83c7895](https://github.com/dgmccart/cryoet-data-portal/commit/83c7895d5c1f9a96cf14b5d30cbd999f9fbc6634))
* **main:** release cryoet-data-portal-python-client 4.1.0 ([#1316](https://github.com/dgmccart/cryoet-data-portal/issues/1316)) ([4f76a7f](https://github.com/dgmccart/cryoet-data-portal/commit/4f76a7ffa4f7c331526b2350e5ab256d2e1a061e))
* **main:** release cryoet-data-portal-python-client 4.2.0 ([#1353](https://github.com/dgmccart/cryoet-data-portal/issues/1353)) ([8c0d9d8](https://github.com/dgmccart/cryoet-data-portal/commit/8c0d9d814234608b60afc60c09a123678b6aeccc))
* **main:** release cryoet-data-portal-python-client 4.2.1 ([#1382](https://github.com/dgmccart/cryoet-data-portal/issues/1382)) ([eadfdac](https://github.com/dgmccart/cryoet-data-portal/commit/eadfdac438f49a89de7f67d9cf1899b1f9749298))
* **main:** release cryoet-data-portal-python-client 4.3.0 ([#1408](https://github.com/dgmccart/cryoet-data-portal/issues/1408)) ([dfa489c](https://github.com/dgmccart/cryoet-data-portal/commit/dfa489c7be16afe6e11c94811966087fdb74e0f3))
* Make threading tests more concise. ([#1355](https://github.com/dgmccart/cryoet-data-portal/issues/1355)) ([538a480](https://github.com/dgmccart/cryoet-data-portal/commit/538a480497bbb91f280aafa30664e4c9f5e055c4))
* update python matrix ([#1407](https://github.com/dgmccart/cryoet-data-portal/issues/1407)) ([639cd90](https://github.com/dgmccart/cryoet-data-portal/commit/639cd901ca4c0def4baa1bdd6e8bd1aeb011a46e))
* Updates to find method docs. ([#615](https://github.com/dgmccart/cryoet-data-portal/issues/615)) ([bc266b6](https://github.com/dgmccart/cryoet-data-portal/commit/bc266b6e5450b8455a7d9ecf31e533f5bd55398a))
* Updating client for new db fields ([#634](https://github.com/dgmccart/cryoet-data-portal/issues/634)) ([05f439d](https://github.com/dgmccart/cryoet-data-portal/commit/05f439d438455a0ef26561a33c9b619dc12630ba))

## [4.3.0](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v4.2.1...cryoet-data-portal-python-client-v4.3.0) (2024-12-19)


### ✨ Features

* add size fields to TiltSeries ([#1406](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1406)) ([3b8e709](https://github.com/chanzuckerberg/cryoet-data-portal/commit/3b8e709a5d44be4085be54c780723fb6910fb521))


### 🧹 Miscellaneous Chores

* update python matrix ([#1407](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1407)) ([639cd90](https://github.com/chanzuckerberg/cryoet-data-portal/commit/639cd901ca4c0def4baa1bdd6e8bd1aeb011a46e))

## [4.2.1](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v4.2.0...cryoet-data-portal-python-client-v4.2.1) (2024-12-06)


### 🐞 Bug Fixes

* fix argument and return value handling for get_by_id ([#1380](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1380)) ([2504e4d](https://github.com/chanzuckerberg/cryoet-data-portal/commit/2504e4d8c5aaf5eae1afb69f24b62c77b2843d08))
* Fix generated examples formatting ([#1369](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1369)) ([6cf8473](https://github.com/chanzuckerberg/cryoet-data-portal/commit/6cf847348365aa1f24f62123c4a50c9cb97ab25d))

## [4.2.0](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v4.1.0...cryoet-data-portal-python-client-v4.2.0) (2024-11-27)


### ✨ Features

* Support a Client object being shared between threads. ([#1351](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1351)) ([ebdc7db](https://github.com/chanzuckerberg/cryoet-data-portal/commit/ebdc7db5069303b8d63481fdee990936c02b2a6a))


### 🧹 Miscellaneous Chores

* Make threading tests more concise. ([#1355](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1355)) ([538a480](https://github.com/chanzuckerberg/cryoet-data-portal/commit/538a480497bbb91f280aafa30664e4c9f5e055c4))

## [4.1.0](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v4.0.0...cryoet-data-portal-python-client-v4.1.0) (2024-11-21)


### ✨ Features

* codegeneration for docstrings ([#1307](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1307)) ([cf0a008](https://github.com/chanzuckerberg/cryoet-data-portal/commit/cf0a0085bf39965bf06b7318af347f50eb0f9b32))


### 🐞 Bug Fixes

* Fixes for relationship field naming. ([#1348](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1348)) ([703d470](https://github.com/chanzuckerberg/cryoet-data-portal/commit/703d470787420c1f24f731004c6b62b5a13126a4))


### 📝 Documentation

* Final edits before ML Challenge ([#1313](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1313)) ([a675983](https://github.com/chanzuckerberg/cryoet-data-portal/commit/a67598344265d7dbec52ff5c1bfce79a3dd2dd2d))

## [4.0.0](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v3.1.1...cryoet-data-portal-python-client-v4.0.0) (2024-10-30)


### ⚠ BREAKING CHANGES

* Initial support for apiv2 (https://github.com/chanzuckerberg/cryoet-data-portal/pull/1085)

### ✨ Features

* Initial support for apiv2 (https://github.com/chanzuckerberg/cryoet-data-portal/pull/1085) ([fec4000](https://github.com/chanzuckerberg/cryoet-data-portal/commit/fec400066d03361f68a9a12865842b83930f410c))

## [3.1.1](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v3.1.0...cryoet-data-portal-python-client-v3.1.1) (2024-10-28)


### 📝 Documentation

* Move documentation site to Sphinx Immaterial ([#1087](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1087)) ([5d549dc](https://github.com/chanzuckerberg/cryoet-data-portal/commit/5d549dce37e69c1e9ddbf76c8cfaf28581419cda))

## [3.1.0](https://github.com/chanzuckerberg/cryoet-data-portal/compare/cryoet-data-portal-python-client-v3.0.3...cryoet-data-portal-python-client-v3.1.0) (2024-08-22)


### ✨ Features

* add user agent to client requests ([#966](https://github.com/chanzuckerberg/cryoet-data-portal/issues/966)) ([8209cd4](https://github.com/chanzuckerberg/cryoet-data-portal/commit/8209cd46cb8ab21341c7ee94672db3bae78f9aa2))
* Generate Python client code using GraphQL introspection ([#1008](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1008)) ([35b7265](https://github.com/chanzuckerberg/cryoet-data-portal/commit/35b72656e77132c9d64cc077705da8940bb29e44))


### 🐞 Bug Fixes

* create recursive_from_prefix path if it does not exist ([#940](https://github.com/chanzuckerberg/cryoet-data-portal/issues/940)) ([0069f08](https://github.com/chanzuckerberg/cryoet-data-portal/commit/0069f080987ac05efef82d024cb17f4dc307a0f3))
* Use match with substring for exception check in client tests ([#895](https://github.com/chanzuckerberg/cryoet-data-portal/issues/895)) ([07352ec](https://github.com/chanzuckerberg/cryoet-data-portal/commit/07352ecdb8c6f50ffe97ff7be9777c0cf6dd66cb))
* wait for graphql to be healthy in client tests ([#1044](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1044)) ([65f0a4b](https://github.com/chanzuckerberg/cryoet-data-portal/commit/65f0a4b76783ad32bbe439f62fc32f0cae3ae646)), closes [#942](https://github.com/chanzuckerberg/cryoet-data-portal/issues/942)


### 🧹 Miscellaneous Chores

* Add additional test case to TestGetDestinationPath ([#955](https://github.com/chanzuckerberg/cryoet-data-portal/issues/955)) ([a9412a8](https://github.com/chanzuckerberg/cryoet-data-portal/commit/a9412a80f3b24ff94b0803fdd59d3583b4521706))
* add instructions and commands to manually release the python package. ([#1073](https://github.com/chanzuckerberg/cryoet-data-portal/issues/1073)) ([4833eb9](https://github.com/chanzuckerberg/cryoet-data-portal/commit/4833eb95d32ee06a5608e69d6aebf013b1c9fd73))
* automate release of python client ([#972](https://github.com/chanzuckerberg/cryoet-data-portal/issues/972)) ([073bff7](https://github.com/chanzuckerberg/cryoet-data-portal/commit/073bff7180e2ac3b390cac6a5665b63a7f00e472))
