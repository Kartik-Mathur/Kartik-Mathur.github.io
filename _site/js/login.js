$(document).ready(function() {

    const domain = 'https://online-api.codingblocks.com/api/v2'
    let mobile_no
    let otpClaimId

    $("body").delegate(".link1", "click", function() {
        $('#mobileDetailsModal').modal('show')
    });

    $("body").delegate("#getOtpBtn", "click", async function() {

        if ($('#getOtpBtn').html() == 'Proceed') {
            mobile_no = $('#mobile_no').val()
            localStorage.setItem("userMobile", mobile_no)
            if (mobile_no.length != 10)
                return alert("Invalid number")

            try {
                const response = await axios.post(`${domain}/jwt/otp/v2`, {
                    'mobile': $('#mobile_no').val(),
                    'dialCode': '91'
                })
                otpClaimId = response.data['id']
                localStorage.setItem("otpClaimId", response.data['id'])

                $('.enter_otp').show()
                $('.enter_mobile').hide()
                $('#getOtpBtn').html('Verify Otp')
            } catch (err) {
                console.log(err)
                alert("Some Error Occured")
            }
        } else {
            try {
                const response = await axios.post(`${domain}/jwt/otp/v2/${otpClaimId}/verify`, {
                    'otp': $('#otp').val(),
                })
                $('#mobileDetailsModal').modal('hide')
            } catch (err) {
                console.log(err)
                $('#mobileDetailsModal').modal('hide')
                alert("OTP verification failed!")
                return
            }

            try {
                // preloading start
                $(".se-pre-con").show();

                await axios.post(`${domain}/users/find`, {
                    'verifiedmobile': `+91-${mobile_no}`
                })

                const reqBody = {
                    "client": "junior_app"
                }

                const juniorStudentResponse = await axios.post(`${domain}/junior/otp/${otpClaimId}/login`,
                    Qs.stringify(reqBody), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })

                localStorage.setItem('jwt', juniorStudentResponse.data.jwt)
                window.location.href = "user.html"
            } catch (err) {
                window.location.href = "addUser.html"
            }
        }

    })

    $("body").delegate("#registerBtn", "click", async function() {

        try {
            const requestBody = {
                "username": `junior-${$('#user_mobile_no').val()}`,
                "mobile": `+91-${$('#user_mobile_no').val()}`,
                "firstname": $('#firstname').val(),
                "lastname": $('#lastname').val(),
                "email": $('#email').val(),
                "password": "password",
                "claimId": localStorage.getItem("otpClaimId"),
                "client": "junior_app"
            }

            const response = await axios.post(`${domain}/junior/users`,
                Qs.stringify(requestBody), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })

            alert("Registration Successful")
            window.location.href = "course-select.html"
        } catch (err) {
            console.log(err)
            alert("Error Occured while registration!")
        }
    })

    $("body").delegate("#registrationSuccess", "click", function() {
        window.location.href = "thank-you.html"
    })

})