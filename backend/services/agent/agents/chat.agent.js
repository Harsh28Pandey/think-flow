import { getModel } from "../config/lllmModels"

export const chatAgent = async (state) => {
    const llm = await getModel("router")
    const systemPrompt = "You are Think Flow, an inteligent AI assistant."
    const response = await llm.invoke([
        {
            "role": "system",
            "content": systemPrompt
        },
        {
            "role": "human",
            "content": state.prompt
        }
    ])
    return {
        ...state,
        aiResponse: response.content
    }
}