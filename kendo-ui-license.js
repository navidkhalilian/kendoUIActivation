'use strict';
var fs = require('fs'),
    path = require('path'),
    jwt = require('jsonwebtoken');

function _interopNamespaceDefault(_0x243e3b) {
    var _0x43242d = Object.create(null);
    if (_0x243e3b) {
        if ('EXNfD' !== 'eFHHV') Object.keys(_0x243e3b).forEach(function (_0x1679ab) {
            if ('wJTpK' === 'wJTpK') {
                if (_0x1679ab !== 'default') {
                    if ('bIbCd' === 'retJG') {
                        function _0x4b0d38() {
                            return _0x5ba56a[_0x46692f];
                        }
                    } else {
                        var _0x3d3833 = Object.getOwnPropertyDescriptor(_0x243e3b, _0x1679ab);
                        Object.defineProperty(_0x43242d, _0x1679ab, _0x3d3833.get ? _0x3d3833 : {
                            'enumerable': true,
                            'get': function () {
                                if ('gUwtM' === 'LVSgn') {
                                    function _0x40d534() {
                                        var _0xffa713 = {
                                            'algorithms': ['RS256', 'RS384', 'RS512']
                                        };
                                        _0x1670ef.verify(_0x66c60d.trim(), _0x14ed28, _0xffa713, function (_0x1d1a2a, _0xde21e8) {
                                            _0x1d1a2a && (_0x470f33.error('(ERROR) Kendo UI: License key signature is not valid. Please, download a new copy of the license and try again.'), _0x1affeb.exit(_0x1ecd95)), _0x114e24(_0xde21e8);
                                        });
                                    }
                                } else return _0x243e3b[_0x1679ab];
                            }
                        });
                    }
                }
            } else {
                function _0x33ab52() {
                    _0x4b1afc.info('(INFO) Kendo UI: ' ['concat'](_0x30c9d2, ' environment variable not set')), _0x18dc4d.access(_0x3f6a83, _0x42455b.constants.R_OK, function (_0x571ea1) {
                        if (_0x571ea1) {
                            var _0x12c3d5 = _0x5ad74e ? 'WARN' : 'ERROR',
                                _0x51c5cc = _0x1fdfb3 ? _0x4478de : _0x1fda3c;
                            _0x40702e.warn('(' ['concat'](_0x12c3d5, ') Kendo UI: License file not found at "').concat(_0x337a70, '\"')), _0x1e226e.exit(_0x51c5cc);
                        } else _0x5d4237.info('(INFO) Kendo UI: Reading license from "' ['concat'](_0x10ed97, '"...')), _0x26729e = _0x543156.readFileSync(_0x28e38e, {
                            'encoding': 'ascii'
                        }), _0x8eb4ac(_0x3452aa);
                    });
                }
            }
        });
        else {
            function _0x1b10ba() {
                var _0x5947dc = _0x28dbe7.getOwnPropertyDescriptor(_0x32a797, _0x2327c0);
                _0x16e267.defineProperty(_0x3c262a, _0x419f34, _0x5947dc.get ? _0x5947dc : {
                    'enumerable': true,
                    'get': function () {
                        return _0xf2cebd[_0xc8f934];
                    }
                });
            }
        }
    }
    return _0x43242d.default = _0x243e3b, Object.freeze(_0x43242d);
}
var fs__namespace = _interopNamespaceDefault(fs),
    path__namespace = _interopNamespaceDefault(path),
    jwt__namespace = _interopNamespaceDefault(jwt),
    key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1kt8qLv3djXQdX8EvqDi
2dQJ0MeJrxPURjvTTiPrZeIbtYvTdOQSCylm2nrzSZApi3NQoaI3VSwnELsRiqcr
xVJbuk8o08PG0Oq1fK/zf584A9AKD/ncH8/sqn2fm/rqUNZtwQ6KWxGypDcrPDfG
kUavAMuU7mkynWX3joXyiqs0jKflu5zzYmqEgcTD8IGYzNnz6R8bEwOjch2M0YTp
ZOJ8Gq14OYICDjlf0PUSxZQvG/51UVxpS95/7H8yeUurViLzIfKok1Oxe9Em6QkT
qOl5AHDaKxyRDE89O52FKnEf5mMqLLUBj+IvGDu7bmgXB5b5CwH5ZntCEWZidtdA
wwIDAQAB
-----END PUBLIC KEY-----`,
    licenseKeyName = 'kendo-ui-license.txt',
    licenseVarName = 'KENDO_UI_LICENSE',
    EXIT_OK = 0x0,
    EXIT_LICENSE_MISSING = 0x1,
    EXIT_LICENSE_INVALID = 0x2,
    cwd = process.env.INIT_CWD || './',
    licenseFile = path__namespace.resolve(cwd, licenseKeyName),
    ngCacheDir = path__namespace.resolve(cwd, '.angular/cache'),
    bundles = ['dist/index.js', 'dist/index-esm.js'],
    command = (process.argv[0x2] || 'help').toLowerCase();
if (command === 'help') printHelp();
else {
    if (command === 'activate') {
        var option = process.argv[0x3],
            ignoreNoLicense = option === '--ignore-no-license';
        activateLicense(ignoreNoLicense);
    }
}

function activateLicense(_0x3cb8b8) {
    var _0x2f18be = process.env[licenseVarName];
    if (_0x2f18be && _0x2f18be.length > 0x0) {
        if ('BhADn' !== 'BhADn') {
            function _0x591593() {
                _0x55482a.warn('(WARN) Kendo UI: Angular CLI cache detected in ' ['concat'](_0x1018df, '. You may need to delete the cache directory to refresh the license key.'));
            }
        } else console.info('(INFO) Kendo UI: Reading license from ' ['concat'](licenseVarName, ' environment variable...')), decodeLicense(_0x2f18be);
    } else {
        if ('wCOpb' !== 'wCOpb') {
            function _0x1cb83c() {
                if (_0xdb746e !== 'default') {
                    var _0x23cb0a = _0x2f1e36.getOwnPropertyDescriptor(_0x544cc4, _0x4e4332);
                    _0x268e0c.defineProperty(_0x4fa6c6, _0x224f8a, _0x23cb0a.get ? _0x23cb0a : {
                        'enumerable': true,
                        'get': function () {
                            return _0x4c1feb[_0x572b3f];
                        }
                    });
                }
            }
        } else console.info('(INFO) Kendo UI: ' ['concat'](licenseVarName, ' environment variable not set')), fs__namespace.access(licenseFile, fs__namespace.constants.R_OK, function (_0x1fa37a) {
            if ('bDODz' !== 'iAyJH') {
                if (_0x1fa37a) {
                    if ('OihoV' === 'SalfO') {
                        function _0x2f459a() {
                            _0x4fb74f.info('(INFO) Kendo UI: Reading license from "' ['concat'](_0x5f3b8a, '"...')), _0x2a64af = _0x4127ee.readFileSync(_0x165e7b, {
                                'encoding': 'ascii'
                            }), _0x1a841e(_0x457557);
                        }
                    } else {
                        var _0x3a6b08 = _0x3cb8b8 ? 'WARN' : 'ERROR',
                            _0x37a8f1 = _0x3cb8b8 ? EXIT_OK : EXIT_LICENSE_MISSING;
                        console.warn('(' ['concat'](_0x3a6b08, ') Kendo UI: License file not found at "').concat(licenseFile, '\"')), process.exit(_0x37a8f1);
                    }
                } else {
                    if ('DFLte' === 'DFLte') console.info('(INFO) Kendo UI: Reading license from "' ['concat'](licenseFile, '"...')), _0x2f18be = fs__namespace.readFileSync(licenseFile, {
                        'encoding': 'ascii'
                    }), decodeLicense(_0x2f18be);
                    else {
                        function _0x40e28b() {
                            var _0x2bbf93 = _0x9afdbb ? 'WARN' : 'ERROR',
                                _0x3a02ea = _0x3b42f5 ? _0x24a98d : _0x2abdaa;
                            _0x2511a6.warn('(' ['concat'](_0x2bbf93, ') Kendo UI: License file not found at "').concat(_0x10823f, '\"')), _0x26cb1b.exit(_0x3a02ea);
                        }
                    }
                }
            } else {
                function _0x4818c5() {
                    if (_0x306bad) {
                        var _0x3dd310 = _0xdf8c81 ? 'WARN' : 'ERROR',
                            _0x1afde5 = _0x461825 ? _0x5db7c3 : _0x30ee61;
                        _0x230f30.warn('(' ['concat'](_0x3dd310, ') Kendo UI: License file not found at "').concat(_0x22ca60, '\"')), _0x5aa948.exit(_0x1afde5);
                    } else _0x575b60.info('(INFO) Kendo UI: Reading license from "' ['concat'](_0x1fcaf7, '"...')), _0x3a4e21 = _0x2fc8dd.readFileSync(_0xa5012d, {
                        'encoding': 'ascii'
                    }), _0x2cb619(_0x5920ab);
                }
            }
        });
    }
}

function decodeLicense(_0x429106) {
    var _0x3bc904 = {
        'algorithms': ['RS256', 'RS384', 'RS512']
    };
    jwt__namespace.verify(_0x429106.trim(), key, _0x3bc904, function (_0x14e201, _0x35e387) {
        if ('uRKoj' === 'uRKoj') {
            if (_0x14e201) {
                if ('ggYJc' === 'ggYJc') console.error('(ERROR) Kendo UI: License key signature is not valid. Please, download a new copy of the license and try again.'), process.exit(EXIT_LICENSE_INVALID);
                else {
                    function _0x4bc5e5() {
                        var _0x11e140 = _0x44f4f1.argv[0x3],
                            _0x395cdd = _0x11e140 === '--ignore-no-license';
                        _0x5ba2df(_0x395cdd);
                    }
                }
            }
            setLicense(_0x35e387);
        } else {
            function _0x42e0de() {
                _0x5d3e38();
            }
        }
    });
}

function setLicense(_0x5e8311) {
    var _0xdc0936 = _0x5e8311.products.length > 0x0,
        _0x58dbba = {
            'timestamp': _0x5e8311.iat,
            'products': _0xdc0936 ? _0x5e8311.products : [],
            'integrity': _0x5e8311.integrity
        },
        _0x45ec80 = JSON.stringify(JSON.stringify(_0x58dbba)),
        _0x22aeb3 = '  ' ['concat'](_0x45ec80.substring(0x1, _0x45ec80.length - 0x1), '  ');
    if (!_0xdc0936) {
        if ('uybqA' === 'uybqA') console.warn('(WARN) Kendo UI: License does not include any products: "' ['concat'](licenseFile, '". ') + 'Please, check that you have a trial or commercial license at https://www.telerik.com/account/renewals-upgrades');
        else {
            function _0xb7c0e1() {
                _0x2c8e27.error('(ERROR) Kendo UI: License key signature is not valid. Please, download a new copy of the license and try again.'), _0xff27ac.exit(_0x2f5a93);
            }
        }
    }
    if (fs__namespace.existsSync(ngCacheDir)) {
        if ('PAJrR' !== 'PAJrR') {
            function _0x2f2874() {
                var _0x339f7e = _0x29a071.join(_0x5880c4, '../' + _0x3011eb),
                    _0x189927 = _0x41944c.readFileSync(_0x339f7e, {
                        'encoding': 'utf-8'
                    }),
                    _0x4a1031 = _0x189927.replace(/ {2}{.*} {2}/, _0x4b38de);
                _0x25ff64.writeFileSync(_0x339f7e, _0x4a1031, {
                    'encoding': 'utf-8'
                });
            }
        } else console.warn('(WARN) Kendo UI: Angular CLI cache detected in ' ['concat'](ngCacheDir, '. You may need to delete the cache directory to refresh the license key.'));
    }
    try {
        if ('XZOwU' === 'RgNRI') {
            function _0x23c773() {
                _0x596f0d.warn('(WARN) Kendo UI: License does not include any products: "' ['concat'](_0x3a12c8, '". ') + 'Please, check that you have a trial or commercial license at https://www.telerik.com/account/renewals-upgrades');
            }
        } else bundles.forEach(function (_0x2d7cef) {
            if ('IxEnE' !== 'dtjLk') {
                var _0x4fb1c2 = path__namespace.join(__dirname, '../' + _0x2d7cef),
                    _0x28aca6 = fs__namespace.readFileSync(_0x4fb1c2, {
                        'encoding': 'utf-8'
                    }),
                    _0x1f25c3 = _0x28aca6.replace(/ {2}{.*} {2}/, _0x22aeb3);
                fs__namespace.writeFileSync(_0x4fb1c2, _0x1f25c3, {
                    'encoding': 'utf-8'
                });
            } else {
                function _0x121a75() {
                    _0x240105 && (_0x4fed1f.error('(ERROR) Kendo UI: License key signature is not valid. Please, download a new copy of the license and try again.'), _0x500608.exit(_0x573ceb)), _0x286d44(_0xc700d6);
                }
            }
        }), console.info('(INFO) Kendo UI: License imported successfully.');
    } catch (_0x47105f) {
        if ('nlTIB' === 'nlTIB') console.error('(ERROR) Kendo UI: Error while importing license from: "' ['concat'](licenseFile, '\".'));
        else {
            function _0x2e55bb() {
                _0x101e8c.info(`Progress Kendo UI Licensing utility for NPM packages\
Copyright © 2020 Progress Software Corporation\
\
Usage: kendo-ui-license <command> [arguments]\
\
Supported commands:\
    activate    kendo-ui-license activate\
\
                Validates and imports the license found in ` ['concat'](_0x403703, ` or\
                the `).concat(_0x4e048b, ` environment variable.\
\
                The exit status is one of the following values:\
                * 0 - success.\
                * 1 - no license key found.\
                * 2 - invalid license key.\
\
                Command arguments:\
\
                --ignore-no-license Sets the exit status to 0 (success) if a license\
                file is missing.\
\
    help        kendo-ui-license help\
                kendo-ui-license\
\
                Prints this help message.\
`));
            }
        }
    }
}

function printHelp() {
    console.info(`Progress Kendo UI Licensing utility for NPM packages\
Copyright © 2020 Progress Software Corporation\
\
Usage: kendo-ui-license <command> [arguments]\
\
Supported commands:\
    activate    kendo-ui-license activate\
\
                Validates and imports the license found in ` ['concat'](licenseKeyName, ` or\
                the `).concat(licenseVarName, ` environment variable.\
\
                The exit status is one of the following values:\
                * 0 - success.\
                * 1 - no license key found.\
                * 2 - invalid license key.\
\
                Command arguments:\
\
                --ignore-no-license Sets the exit status to 0 (success) if a license\
                file is missing.\
\
    help        kendo-ui-license help\
                kendo-ui-license\
\
                Prints this help message.\
`));
}