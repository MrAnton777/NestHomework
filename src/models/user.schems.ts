import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose"

@Schema()
export class User{
    @Prop({required:true})
    public name:string


    @Prop()
    public surname:string

    @Prop()
    public email:string

}

export const UserModel = SchemaFactory.createForClass(User);