/*
Code: Register custom username telergam & telp
Version: 1.3.1.1
last update: 11 desember 2024
Change log: [cek Readme version 1.3.1.1]
*/
const _0x9e2ca8 = _0x3a15;
(function (_0x472147, _0x531ba0) {
    const _0x40d5a7 = _0x3a15,
        _0x5b3b65 = _0x472147();
    while (!![]) {
        try {
            const _0x2f80aa = -parseInt(_0x40d5a7(0x21a)) / 0x1 + parseInt(_0x40d5a7(0x215)) / 0x2 * (parseInt(_0x40d5a7(0x211)) / 0x3) + -parseInt(_0x40d5a7(0x1f5)) / 0x4 + parseInt(_0x40d5a7(0x218)) / 0x5 * (parseInt(_0x40d5a7(0x210)) / 0x6) + parseInt(_0x40d5a7(0x1e5)) / 0x7 * (parseInt(_0x40d5a7(0x22a)) / 0x8) + -parseInt(_0x40d5a7(0x204)) / 0x9 + -parseInt(_0x40d5a7(0x222)) / 0xa;
            if (_0x2f80aa === _0x531ba0) break;
            else _0x5b3b65['push'](_0x5b3b65['shift']());
        } catch (_0x3722e0) {
            _0x5b3b65['push'](_0x5b3b65['shift']());
        }
    }
}(_0x5de7, 0x5248a));

function _0x3a15(_0x29fcbf, _0x1e4e6e) {
    const _0x5de722 = _0x5de7();
    return _0x3a15 = function (_0x3a15e6, _0x306a20) {
        _0x3a15e6 = _0x3a15e6 - 0x1e2;
        let _0x2316c4 = _0x5de722[_0x3a15e6];
        return _0x2316c4;
    }, _0x3a15(_0x29fcbf, _0x1e4e6e);
}
let registerForm = document['querySelector'](_0x9e2ca8(0x241)),
    registerEmail = document[_0x9e2ca8(0x230)](_0x9e2ca8(0x23e)),
    registerUsername = document[_0x9e2ca8(0x230)]('#register-username'),
    registerPassword = document[_0x9e2ca8(0x230)]('#register-password'),
    registerUsernametelegram = document[_0x9e2ca8(0x230)](_0x9e2ca8(0x23b)),
    registerNomotelp = document[_0x9e2ca8(0x230)]('#register-nomotelp'),
    elementsregisterArray = [registerForm, registerEmail, registerUsername, registerPassword, registerUsernametelegram, registerNomotelp],
    dataregisterExists = elementsregisterArray[_0x9e2ca8(0x231)](_0x35be42 => {
        return _0x35be42 !== null && _0x35be42 !== undefined;
    });
if (dataregisterExists) {
    function konfirmasiRegister() {
        const _0x2ed967 = _0x9e2ca8,
            _0x533480 = registerEmail['value'],
            _0x415f3a = registerNomotelp[_0x2ed967(0x221)];
        Swal[_0x2ed967(0x224)]({
            'title': pesanNotifregister[_0x2ed967(0x220)][_0x2ed967(0x20f)],
            'text': '' + pesanNotifregister[_0x2ed967(0x220)][_0x2ed967(0x1f2)][_0x2ed967(0x23c)](/{email}/g, _0x533480)[_0x2ed967(0x23c)](/{telp}/g, _0x415f3a),
            'icon': _0x2ed967(0x1f4),
            'showCancelButton': !![],
            'confirmButtonText': pesanNotifregister[_0x2ed967(0x220)]['ya'],
            'cancelButtonText': pesanNotifregister[_0x2ed967(0x220)][_0x2ed967(0x233)]
        })['then'](_0x15f484 => {
            _0x15f484['isConfirmed'] && (otpAktif ? sendOTPregister() : registerUser());
        });
    }

    function hashPasswordRegister(_0x2f0449) {
        return btoa(_0x2f0449);
    }
    let isRegistering = ![];
    async function registerUser() {
        const _0x359ca6 = _0x9e2ca8;
        if (isRegistering) return;
        isRegistering = !![];
        const _0x59dcf5 = registerEmail[_0x359ca6(0x221)],
            _0x561e7f = registerUsername[_0x359ca6(0x221)],
            _0x2d8ca9 = registerPassword[_0x359ca6(0x221)],
            _0x54e286 = registerUsernametelegram[_0x359ca6(0x221)],
            _0x113030 = registerNomotelp[_0x359ca6(0x221)];
        if (!_0x59dcf5 || !_0x561e7f || !_0x2d8ca9 || !_0x113030) {
            const _0x372a40 = pesanNotifregister['dataTidakLengkap'] || {
                'judul': 'Incomplete Data',
                'pesan': _0x359ca6(0x21c)
            };
            showSweetAlertRegister(_0x372a40['judul'], _0x372a40[_0x359ca6(0x1f2)], _0x359ca6(0x227)), isRegistering = ![];
            return;
        }
        Swal[_0x359ca6(0x224)]({
            'title': pesanNotifregister[_0x359ca6(0x242)]['judul'],
            'text': pesanNotifregister[_0x359ca6(0x242)][_0x359ca6(0x1f2)],
            'icon': _0x359ca6(0x20e),
            'showConfirmButton': ![],
            'allowOutsideClick': ![]
        });
        try {
            const _0x2739c7 = await auth[_0x359ca6(0x213)](_0x59dcf5, _0x2d8ca9),
                _0x5a2f63 = _0x2739c7[_0x359ca6(0x202)];
            await db['collection']('users')['doc'](_0x5a2f63[_0x359ca6(0x235)])[_0x359ca6(0x1fd)]({
                'email': _0x59dcf5,
                'username': _0x561e7f,
                'telegram': _0x54e286,
                'telp': _0x113030,
                'password': hashPasswordRegister(_0x2d8ca9),
                'role': _0x359ca6(0x22e),
                'coin': '0',
                'exp': '?',
                'emailVerified': ![]
            });
            const _0x5c7c2b = await db[_0x359ca6(0x1e6)](_0x359ca6(0x245))['doc'](_0x5a2f63[_0x359ca6(0x235)])[_0x359ca6(0x20b)](),
                _0x150f34 = _0x5c7c2b[_0x359ca6(0x1fb)]();
            if (!_0x150f34[_0x359ca6(0x212)] || !_0x150f34[_0x359ca6(0x223)] || !_0x150f34[_0x359ca6(0x214)] || !_0x150f34[_0x359ca6(0x219)] || !_0x150f34[_0x359ca6(0x243)]) {
                await auth[_0x359ca6(0x1ff)]['delete'](), Swal[_0x359ca6(0x1ee)]();
                const _0x5b7986 = pesanNotifregister[_0x359ca6(0x1f6)] || {
                    'judul': _0x359ca6(0x1eb),
                    'pesan': _0x359ca6(0x1e4)
                };
                showSweetAlertRegister(_0x5b7986[_0x359ca6(0x20f)], _0x5b7986[_0x359ca6(0x1f2)], _0x359ca6(0x227)), isRegistering = ![];
                return;
            }
            Swal[_0x359ca6(0x1ee)](), showSweetAlertRegister(pesanNotifregister[_0x359ca6(0x1f1)][_0x359ca6(0x20f)], pesanNotifregister[_0x359ca6(0x1f1)][_0x359ca6(0x1f2)], _0x359ca6(0x229)), showVerifyEmailPrompt();
        } catch (_0x15894e) {
            Swal[_0x359ca6(0x1ee)](), _0x15894e['code'] === _0x359ca6(0x200) ? showSweetAlertRegister(pesanNotifregister[_0x359ca6(0x205)][_0x359ca6(0x20f)], pesanNotifregister[_0x359ca6(0x205)][_0x359ca6(0x1f2)], _0x359ca6(0x227)) : showSweetAlertRegister(pesanNotifregister[_0x359ca6(0x1e7)][_0x359ca6(0x20f)], pesanNotifregister[_0x359ca6(0x1e7)][_0x359ca6(0x1f2)] + _0x15894e[_0x359ca6(0x246)], 'error'), isRegistering = ![];
        }
    }

    function showVerifyEmailPrompt() {
        const _0x383ed4 = _0x9e2ca8;
        Swal[_0x383ed4(0x224)]({
            'title': pesanNotifregister[_0x383ed4(0x1e3)]['judul'],
            'text': pesanNotifregister[_0x383ed4(0x1e3)][_0x383ed4(0x1f2)],
            'icon': _0x383ed4(0x1f4),
            'showCancelButton': !![],
            'confirmButtonText': pesanNotifregister['konfimasiVertifyemail']['ya'],
            'cancelButtonText': pesanNotifregister[_0x383ed4(0x1e3)]['tidak'],
            'allowOutsideClick': ![]
        })[_0x383ed4(0x20a)](_0x39d0a3 => {
            const _0x385bc4 = _0x383ed4;
            if (_0x39d0a3[_0x385bc4(0x1e9)]) {
                var _0x1c242d = auth['currentUser'];
                _0x1c242d && (_0x1c242d[_0x385bc4(0x1f0)](), showSweetAlertRegister(pesanNotifregister[_0x385bc4(0x1f7)][_0x385bc4(0x20f)], pesanNotifregister[_0x385bc4(0x1f7)]['pesan'], _0x385bc4(0x229)), setTimeout(function () {
                    const _0x3d1518 = _0x385bc4;
                    auth[_0x3d1518(0x239)](), runredirect_rgHiru();
                }, 0x3e8));
            } else showSweetAlertRegister(pesanNotifregister[_0x385bc4(0x207)][_0x385bc4(0x20f)], pesanNotifregister[_0x385bc4(0x207)]['pesan'], _0x385bc4(0x20e)), setTimeout(function () {
                const _0xbe59c7 = _0x385bc4;
                auth[_0xbe59c7(0x239)](), runredirect_rgHiru();
            }, 0x3e8);
        });
    }
    if (otpAktif) {
        registerForm[_0x9e2ca8(0x201)](_0x9e2ca8(0x237), _0x7790f7 => {
            const _0x30c0e2 = _0x9e2ca8;
            _0x7790f7[_0x30c0e2(0x249)]();
            if (!recaptchaVerifierrx) {
                Swal[_0x30c0e2(0x224)]({
                    'title': pesanNotifregister['reCAPTCHA']['judul'],
                    'text': pesanNotifregister[_0x30c0e2(0x22f)]['pesan'],
                    'icon': _0x30c0e2(0x20e)
                });
                return;
            } else checkDomainBeforeAuthregister(_0x1ca89d => {
                if (!_0x1ca89d) return;
                else konfirmasiRegister();
            });
        });
        let recaptchaVerifierrx;
        renderRegister();

        function renderRegister() {
            const _0x3fa38b = _0x9e2ca8;
            window[_0x3fa38b(0x1fe)] = new firebase[(_0x3fa38b(0x22b))][(_0x3fa38b(0x22d))]('recaptcha-container', {
                'size': _0x3fa38b(0x1e2),
                'callback': _0x21e174 => {
                    const _0x9a62a7 = _0x3fa38b;
                    console[_0x9a62a7(0x236)](_0x9a62a7(0x1ec)), recaptchaVerifierrx = !![];
                },
                'expired-callback': () => {
                    const _0xd63b55 = _0x3fa38b;
                    Swal[_0xd63b55(0x224)]({
                        'title': pesanNotifregister[_0xd63b55(0x240)]['judul'],
                        'text': pesanNotifregister['expreCAPTCHA'][_0xd63b55(0x1f2)],
                        'icon': 'info'
                    }), recaptchaVerifierrx = ![], console['log'](_0xd63b55(0x21f));
                }
            }), recaptchaVerifier['render']();
        }

        function sendOTPregister() {
            const _0x654f2a = _0x9e2ca8,
                _0xfa20ee = document[_0x654f2a(0x23a)]('register-nomotelp')[_0x654f2a(0x221)],
                _0x342965 = convertPhoneNumber(_0xfa20ee);
            auth[_0x654f2a(0x21d)](_0x342965, window[_0x654f2a(0x1fe)])['then'](_0x22d1b8 => {
                const _0xd17d97 = _0x654f2a;
                window[_0xd17d97(0x1f3)] = _0x22d1b8, Swal[_0xd17d97(0x224)]({
                    'title': pesanNotifregister['kodeOTP']['judul'],
                    'input': _0xd17d97(0x226),
                    'inputPlaceholder': pesanNotifregister['kodeOTP']['pesan'],
                    'showCancelButton': ![],
                    'confirmButtonText': pesanNotifregister[_0xd17d97(0x24a)]['ya'],
                    'allowOutsideClick': ![],
                    'preConfirm': _0x4dc4ab => {
                        return verifyOTPregister(_0x4dc4ab);
                    }
                });
            })[_0x654f2a(0x1fa)](_0x472c05 => {
                const _0x5ae8b6 = _0x654f2a;
                console[_0x5ae8b6(0x227)](_0x5ae8b6(0x216), _0x472c05), Swal['fire'](_0x5ae8b6(0x217), 'Error sending OTP: ' + _0x472c05[_0x5ae8b6(0x246)], _0x5ae8b6(0x227));
            });
        }

        function verifyOTPregister(_0x18b910) {
            const _0x19fc81 = _0x9e2ca8,
                _0x49836f = window[_0x19fc81(0x1f3)];
            return _0x49836f[_0x19fc81(0x1e8)](_0x18b910)[_0x19fc81(0x20a)](_0x2895fc => {
                const _0x27d8c4 = _0x19fc81;
                Swal[_0x27d8c4(0x224)](pesanNotifregister[_0x27d8c4(0x238)][_0x27d8c4(0x20f)], pesanNotifregister[_0x27d8c4(0x238)][_0x27d8c4(0x1f2)], _0x27d8c4(0x229));
                const _0x12eb7e = auth['currentUser'];
                _0x12eb7e[_0x27d8c4(0x206)]()['then'](function () {
                    const _0x377e62 = _0x27d8c4;
                    console[_0x377e62(0x236)]('User account deleted successfully'), registerUser();
                })['catch'](function (_0x2ed511) {
                    const _0x43ca7d = _0x27d8c4;
                    console[_0x43ca7d(0x227)]('Error deleting user account:', _0x2ed511);
                });
            })['catch'](_0x149c15 => {
                const _0x5e2bc2 = _0x19fc81;
                console[_0x5e2bc2(0x227)]('Error verifying OTP:', _0x149c15), console[_0x5e2bc2(0x236)](_0x5e2bc2(0x20d), _0x149c15[_0x5e2bc2(0x246)]), Swal[_0x5e2bc2(0x224)](pesanNotifregister[_0x5e2bc2(0x247)]['judul'], pesanNotifregister[_0x5e2bc2(0x247)]['pesan'], _0x5e2bc2(0x227));
            });
        }
    } else console[_0x9e2ca8(0x236)](_0x9e2ca8(0x21e)), registerForm['addEventListener']('submit', _0xbcf472 => {
        _0xbcf472['preventDefault'](), checkDomainBeforeAuthregister(_0x4990ab => {
            if (!_0x4990ab) return;
            else konfirmasiRegister();
        });
    });

    function convertPhoneNumber(_0x4666d2) {
        const _0x21f522 = _0x9e2ca8,
            _0x4b65b4 = _0x4666d2[_0x21f522(0x23c)](/\D/g, '');
        if (_0x4b65b4[_0x21f522(0x225)]('62')) return '+62' + _0x4b65b4[_0x21f522(0x1ef)](0x2);
        else {
            if (_0x4b65b4['startsWith']('0')) return '+62' + _0x4b65b4[_0x21f522(0x1ef)](0x1);
            else return !_0x4b65b4[_0x21f522(0x225)]('+') ? '+' + _0x4b65b4 : _0x4b65b4;
        }
    }

    function showSweetAlertRegister(_0x3d17d3, _0x6fbb60, _0x4e3e7f) {
        const _0x39ed71 = _0x9e2ca8;
        Swal[_0x39ed71(0x224)]({
            'title': _0x3d17d3,
            'text': _0x6fbb60,
            'icon': _0x4e3e7f,
            'confirmButtonText': 'OK'
        });
    }

    function runredirect_rgHiru() {
        const _0x384c70 = _0x9e2ca8;
        switch (redirectOpsi_rgHiru[_0x384c70(0x23d)]()) {
        case 'reload':
            setTimeout(function () {
                const _0x1281e2 = _0x384c70;
                location[_0x1281e2(0x23f)]();
            }, waktuTunda_rgHiru);
            break;
        case _0x384c70(0x1f8):
            setTimeout(function () {
                const _0x5309f8 = _0x384c70;
                window[_0x5309f8(0x228)][_0x5309f8(0x248)] = RedirectOpsiHalaman_rgHiru[_0x5309f8(0x234)];
            }, waktuTunda_rgHiru);
            break;
        case _0x384c70(0x208):
            setTimeout(function () {
                const _0x1710cf = _0x384c70;
                window['location'][_0x1710cf(0x248)] = RedirectOpsiHalaman_rgHiru[_0x1710cf(0x203)];
            }, waktuTunda_rgHiru);
            break;
        default:
            setTimeout(function () {
                const _0x5f3757 = _0x384c70;
                location[_0x5f3757(0x23f)]();
            }, waktuTunda_rgHiru);
            break;
        }
    }

    function checkDomainBeforeAuthregister(_0x4da67e) {
        const _0x80403e = _0x9e2ca8,
            _0x3695ba = _0x80403e(0x244),
            _0x5b4dae = window[_0x80403e(0x228)]['hostname'],
            _0x19180c = _0x80403e(0x1ea),
            _0x38d356 = localStorage[_0x80403e(0x209)](_0x19180c);
        _0x38d356 && _0x38d356 === _0x5b4dae ? _0x4da67e(!![]) : fetch(_0x3695ba)[_0x80403e(0x20a)](_0x5606af => {
            const _0x7014d8 = _0x80403e;
            if (!_0x5606af['ok']) throw new Error('Network response was not ok');
            return _0x5606af[_0x7014d8(0x1ed)]();
        })[_0x80403e(0x20a)](_0x3925a8 => {
            const _0x410732 = _0x80403e;
            let _0x3cbe50 = ![];
            for (const _0x178cdb in _0x3925a8) {
                const _0x4d65f8 = _0x3925a8[_0x178cdb],
                    _0x420cb2 = _0x4d65f8[_0x410732(0x232)],
                    _0x1eb1cb = _0x4d65f8[_0x410732(0x21b)];
                if (_0x420cb2 === _0x5b4dae || _0x1eb1cb === _0x5b4dae) {
                    _0x3cbe50 = !![];
                    break;
                }
            }
            _0x3cbe50 ? (localStorage['setItem'](_0x19180c, _0x5b4dae), _0x4da67e(!![])) : (showSweetAlertRegister(pesanNotifregister[_0x410732(0x22c)][_0x410732(0x20f)], pesanNotifregister[_0x410732(0x22c)][_0x410732(0x1f2)], _0x410732(0x20c)), _0x4da67e(![]));
        })[_0x80403e(0x1fa)](_0xc6c928 => {
            const _0x2a8a55 = _0x80403e;
            console[_0x2a8a55(0x227)](_0x2a8a55(0x1fc), _0xc6c928);
        });
    }
} else console[_0x9e2ca8(0x236)](_0x9e2ca8(0x1f9));

function _0x5de7() {
    const _0x36059d = ['currentUser', 'auth/email-already-in-use', 'addEventListener', 'user', 'custom_url', '779994bUxyjg', 'emailTerdaftar', 'delete', 'infoRulevertify', 'customurl', 'getItem', 'then', 'get', 'warning', 'Gagal vertifikasi OTP: ', 'info', 'judul', '6BoYyOZ', '548223TUELSc', 'email', 'createUserWithEmailAndPassword', 'role', '4VHGnBq', 'Error sending OTP:', 'Error', '1293385TQkUOU', 'telegram', '52557CAxItC', 'webDashboard', 'Please fill in all data correctly.', 'signInWithPhoneNumber', 'otp dinonaktifkan', 'reCAPTCHA belum selesai', 'konfimasiRegister', 'value', '1910500NvyODg', 'username', 'fire', 'startsWith', 'text', 'error', 'location', 'success', '3911352VYhDBM', 'auth', 'ijinRegister', 'RecaptchaVerifier', 'User', 'reCAPTCHA', 'querySelector', 'every', 'name', 'tidak', 'homepage_url', 'uid', 'log', 'submit', 'OTPsukses', 'signOut', 'getElementById', '#register-usernametelegram', 'replace', 'toLowerCase', '#register-email', 'reload', 'expreCAPTCHA', '#register-form', 'loaderSaatRegister', 'telp', 'https://xhrji-617c0-default-rtdb.firebaseio.com/akses_KodeLogin.json', 'users', 'message', 'OTPsalah', 'href', 'preventDefault', 'kodeOTP', 'normal', 'konfimasiVertifyemail', 'Data tidak valid, silakan coba lagi.', '7AOVdtG', 'collection', 'errorRegister', 'confirm', 'isConfirmed', 'allowedDomain', 'Registrasi Gagal', 'reCAPTCHA diselesainkan', 'json', 'close', 'slice', 'sendEmailVerification', 'registerBerhasil', 'pesan', 'confirmationResult', 'question', '1783084XhMGQx', 'registerGagal', 'vertifyEmailterkirim', 'homepage', 'code register tidak bekerja karena element id dan class tidak ada.', 'catch', 'data', 'There has been a problem with your fetch operation:', 'set', 'recaptchaVerifier'];
    _0x5de7 = function () {
        return _0x36059d;
    };
    return _0x5de7();
}
