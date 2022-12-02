export interface UserData {
    fullName: string
    email: string
    password: string
    checkPassword: string
    showPassword: boolean
}
export interface RegisterFormValues {
    imgUrl:string
    currentProfession:[{
        value: string
        label:string
    }]
    email: string
    phoneNo:string
    address:string
    cnic:number
    passportNo:string
  }