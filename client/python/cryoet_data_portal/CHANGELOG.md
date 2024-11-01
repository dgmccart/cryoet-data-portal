# Changelog

## [5.0.0](https://github.com/dgmccart/cryoet-data-portal/compare/cryoet-data-portal-python-client-v4.0.0...cryoet-data-portal-python-client-v5.0.0) (2024-11-01)


### ⚠ BREAKING CHANGES

* Initial support for apiv2 (https://github.com/chanzuckerberg/cryoet-data-portal/pull/1085)

### ✨ Features

* add deep querying ([8338a82](https://github.com/dgmccart/cryoet-data-portal/commit/8338a827d031ac5052236576b709c674d9cd40d2))
* add user agent to client requests ([#966](https://github.com/dgmccart/cryoet-data-portal/issues/966)) ([8209cd4](https://github.com/dgmccart/cryoet-data-portal/commit/8209cd46cb8ab21341c7ee94672db3bae78f9aa2))
* Generate Python client code using GraphQL introspection ([#1008](https://github.com/dgmccart/cryoet-data-portal/issues/1008)) ([35b7265](https://github.com/dgmccart/cryoet-data-portal/commit/35b72656e77132c9d64cc077705da8940bb29e44))
* Initial support for apiv2 (https://github.com/chanzuckerberg/cryoet-data-portal/pull/1085) ([fec4000](https://github.com/dgmccart/cryoet-data-portal/commit/fec400066d03361f68a9a12865842b83930f410c))


### 🐞 Bug Fixes

* create recursive_from_prefix path if it does not exist ([#940](https://github.com/dgmccart/cryoet-data-portal/issues/940)) ([0069f08](https://github.com/dgmccart/cryoet-data-portal/commit/0069f080987ac05efef82d024cb17f4dc307a0f3))
* Don't dowload too many annotation metadata files ([#639](https://github.com/dgmccart/cryoet-data-portal/issues/639)) ([69d9a68](https://github.com/dgmccart/cryoet-data-portal/commit/69d9a687fbc830b9edcc74c9c91fe133551a3fac))
* fix list relationship query filters ([#3](https://github.com/dgmccart/cryoet-data-portal/issues/3)) ([e798033](https://github.com/dgmccart/cryoet-data-portal/commit/e798033f1ae2614e9d2a5636214f9d9681a6aef0))
* handle empty filters ([e503c18](https://github.com/dgmccart/cryoet-data-portal/commit/e503c18b4f93aa626f6ad8f44a20eb0dc3bbf26f))
* install the right version of gql ([7d6c295](https://github.com/dgmccart/cryoet-data-portal/commit/7d6c29512e478cbd435cac93e298cbecfb4e3ae0))
* Merge query filters properly ([#820](https://github.com/dgmccart/cryoet-data-portal/issues/820)) ([8555301](https://github.com/dgmccart/cryoet-data-portal/commit/8555301d7bac6b5b08046a079bd272fa732a4eee))
* Raise exception when attempting to filter on related objects. ([#642](https://github.com/dgmccart/cryoet-data-portal/issues/642)) ([14b7f58](https://github.com/dgmccart/cryoet-data-portal/commit/14b7f58fcf3ea29f2511743ae5578524fcb9876b))
* rename package dir ([c507661](https://github.com/dgmccart/cryoet-data-portal/commit/c50766135d5d28c51497738b08236557fe6ea2ed))
* update client tomogram documentation ([#560](https://github.com/dgmccart/cryoet-data-portal/issues/560)) ([d6d8e87](https://github.com/dgmccart/cryoet-data-portal/commit/d6d8e8722606516da878f8247e7e0309cc1d5153))
* update docs, and docsite icons ([#2](https://github.com/dgmccart/cryoet-data-portal/issues/2)) ([9143ba2](https://github.com/dgmccart/cryoet-data-portal/commit/9143ba2d588c0fa30ccea164c18aa21ea0bb2481))
* Use match with substring for exception check in client tests ([#895](https://github.com/dgmccart/cryoet-data-portal/issues/895)) ([07352ec](https://github.com/dgmccart/cryoet-data-portal/commit/07352ecdb8c6f50ffe97ff7be9777c0cf6dd66cb))
* wait for graphql to be healthy in client tests ([#1044](https://github.com/dgmccart/cryoet-data-portal/issues/1044)) ([65f0a4b](https://github.com/dgmccart/cryoet-data-portal/commit/65f0a4b76783ad32bbe439f62fc32f0cae3ae646)), closes [#942](https://github.com/dgmccart/cryoet-data-portal/issues/942)


### 📝 Documentation

* Add python client release docs to this repo ([#673](https://github.com/dgmccart/cryoet-data-portal/issues/673)) ([c156f8e](https://github.com/dgmccart/cryoet-data-portal/commit/c156f8e1b6b9b469d3d71405a2f0eeef5c439995))
* Move documentation site to Sphinx Immaterial ([#1087](https://github.com/dgmccart/cryoet-data-portal/issues/1087)) ([5d549dc](https://github.com/dgmccart/cryoet-data-portal/commit/5d549dce37e69c1e9ddbf76c8cfaf28581419cda))


### 🧹 Miscellaneous Chores

* Add additional test case to TestGetDestinationPath ([#955](https://github.com/dgmccart/cryoet-data-portal/issues/955)) ([a9412a8](https://github.com/dgmccart/cryoet-data-portal/commit/a9412a80f3b24ff94b0803fdd59d3583b4521706))
* Add basic scaffolding for a client library. ([679f0cc](https://github.com/dgmccart/cryoet-data-portal/commit/679f0ccf6f25c9d9c11b8cc7936b3db065b4ad9e))
* Add docs for the python api client ([#1](https://github.com/dgmccart/cryoet-data-portal/issues/1)) ([f8ca252](https://github.com/dgmccart/cryoet-data-portal/commit/f8ca252cfc5d32001c80fc02f0a642c54b69af65))
* add instructions and commands to manually release the python package. ([#1073](https://github.com/dgmccart/cryoet-data-portal/issues/1073)) ([4833eb9](https://github.com/dgmccart/cryoet-data-portal/commit/4833eb95d32ee06a5608e69d6aebf013b1c9fd73))
* automate release of python client ([#972](https://github.com/dgmccart/cryoet-data-portal/issues/972)) ([073bff7](https://github.com/dgmccart/cryoet-data-portal/commit/073bff7180e2ac3b390cac6a5665b63a7f00e472))
* docs formatting fixes ([#616](https://github.com/dgmccart/cryoet-data-portal/issues/616)) ([958b553](https://github.com/dgmccart/cryoet-data-portal/commit/958b553821bc5582d972cb5a3689937e2cfea38d))
* **main:** release cryoet-data-portal-python-client 3.1.0 ([#1071](https://github.com/dgmccart/cryoet-data-portal/issues/1071)) ([811716f](https://github.com/dgmccart/cryoet-data-portal/commit/811716f4fc3263e6cda085e454f47a540d5f3efc))
* **main:** release cryoet-data-portal-python-client 3.1.1 ([#1119](https://github.com/dgmccart/cryoet-data-portal/issues/1119)) ([596e2a3](https://github.com/dgmccart/cryoet-data-portal/commit/596e2a380a9091484cef05c377f1f56c8027a568))
* **main:** release cryoet-data-portal-python-client 4.0.0 ([#1288](https://github.com/dgmccart/cryoet-data-portal/issues/1288)) ([83c7895](https://github.com/dgmccart/cryoet-data-portal/commit/83c7895d5c1f9a96cf14b5d30cbd999f9fbc6634))
* Updates to find method docs. ([#615](https://github.com/dgmccart/cryoet-data-portal/issues/615)) ([bc266b6](https://github.com/dgmccart/cryoet-data-portal/commit/bc266b6e5450b8455a7d9ecf31e533f5bd55398a))
* Updating client for new db fields ([#634](https://github.com/dgmccart/cryoet-data-portal/issues/634)) ([05f439d](https://github.com/dgmccart/cryoet-data-portal/commit/05f439d438455a0ef26561a33c9b619dc12630ba))
* use updated URL for the portal api. ([308643e](https://github.com/dgmccart/cryoet-data-portal/commit/308643e6c25e6ba4d9043d83e0c43292d84879b8))

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
