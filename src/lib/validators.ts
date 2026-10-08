import * as Yup from 'yup';

export const SginUpSchema = Yup.object({
    phone: Yup.string().required('شماره تلفن اجباری است')
})

export const ContactUsSchema = Yup.object({
    fullname: Yup.string().required('نام و نام خانوادگی اجباری است'),
    email: Yup.string().email('فرمت ایمیل اشتباه است').required('ایمیل اجباری است'),
    message: Yup.string().max(255, 'پیام شما باید حداکثر 255 کاراکتر باشد').required('پیام اجباری است')
})