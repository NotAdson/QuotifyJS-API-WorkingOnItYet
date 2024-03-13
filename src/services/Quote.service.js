import { database } from "../database/connection.js"
import { QuoteModel } from "../models/Quote.model.js"
import { SUCCESS } from "../shared/messages.js"

export class QuoteService{
    async createQuote(quote, creatorId, topicId){
        try{
            await database.sync()
            const newQuote = await QuoteModel.create(quote, topicId, creatorId)
            return {
                statusValue: 201,
                quoteId: newQuote.id,
                message: `Created ${SUCCESS.QUOTE}`
            }
        }catch(error){
            return {
                message: error.message,
                statusValue: error.statusValue
            }
        }
    }
}