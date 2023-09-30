export const FormsValidate = (data, type) => {

    const errors = [];

    if (type === "login") {

        if (!data.username.trim()) {
            errors.username = "نام کاربری خود را وارد کنید!";
        } else {
            delete errors.username;
        }

        if (!data.password) {
            errors.password = "رمز عبور خود را وارد کنید!";
        } else if (data.password.length < 6) {
            errors.password = "رمز عبور شما حداقل شش حرف دارد!";
        } else {
            delete errors.password;
        }
        
    }

    if (type === "forgetpass") {
        
        if (!data.mobile) {
            errors.mobile = "شماره تلفن خود را وارد کنید!"
        } else {
            delete errors.mobile;
        }

    }

    if (type === "signup") {

        if (!data.first_name.trim()) {
            errors.first_name = "نام خود را وارد کنید!";
        } else {
            delete errors.first_name;
        }

        if (!data.last_name.trim()) {
            errors.last_name = "نام خانوادگی خود را وارد کنید!";
        } else {
            delete errors.last_name;
        }

        if (!data.username.trim()) {
            errors.username = "نام کاربری خود را وارد کنید!";
        } else {
            delete errors.username;
        }

        if (!data.phone) {
            errors.phone = "تلفن همراه خود را وارد کنید!";
        } else {
            delete errors.phone;
        }

        if (!data.password) {
            errors.password = "!رمز عبور خود را وارد کنید";
        } else if (data.password.length < 6) {
            errors.password = "!رمز عبور شما باید حداقل شش حرف باشد";
        } else {
            delete errors.password;
        }

        if (!data.confirm_password) {
            errors.confirm_password = "!رمز عبور خود را تایید کنید"
        } else if (data.confirm_password !== data.password) {
            errors.confirm_password = "!رمز های عبور با هم تطابق ندارند"
        } else {
            delete errors.confirm_password;
        }

    }


    return errors;

}