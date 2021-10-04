import { Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose'

export class Event extends mongoose.Document {
    @Prop()
    type: string;
    
    @Prop({ index: true })
    name: string;
    
    @Prop({ type: mongoose.SchemaTypes.Mixed })
    payload: Record<any, string>; 
}

export const EventSchema = SchemaFactory.createForClass(Event)
EventSchema.index({ name: 1, type: -1 })