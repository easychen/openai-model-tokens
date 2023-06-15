const models = [
    {
      name: 'gpt-4',
      description: 'More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration 2 weeks after it is released.',
      maxTokens: 8192,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-4-0613',
      description: 'Snapshot of gpt-4 from June 13th 2023 with function calling data. Unlike gpt-4, this model will not receive updates, and will be deprecated 3 months after a new version is released.',
      maxTokens: 8192,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-4-32k',
      description: 'Same capabilities as the base gpt-4 mode but with 4x the context length. Will be updated with our latest model iteration.',
      maxTokens: 32768,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-4-32k-0613',
      description: 'Snapshot of gpt-4-32 from June 13th 2023. Unlike gpt-4-32k, this model will not receive updates, and will be deprecated 3 months after a new version is released.',
      maxTokens: 32768,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-3.5-turbo',
      description: 'Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration 2 weeks after it is released.',
      maxTokens: 4096,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-3.5-turbo-16k',
      description: 'Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context.',
      maxTokens: 16384,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-3.5-turbo-0613',
      description: 'Snapshot of gpt-3.5-turbo from June 13th 2023 with function calling data. Unlike gpt-3.5-turbo, this model will not receive updates, and will be deprecated 3 months after a new version is released.',
      maxTokens: 4096,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'gpt-3.5-turbo-16k-0613',
      description: 'Snapshot of gpt-3.5-turbo-16k from June 13th 2023. Unlike gpt-3.5-turbo-16k, this model will not receive updates, and will be deprecated 3 months after a new version is released.',
      maxTokens: 16384,
      trainingData: 'Up to Sep 2021'
    },
    {
      name: 'text-davinci-003',
      description: 'Can do any language task with better quality, longer output, and consistent instruction-following than the curie, babbage, or ada models. Also supports some additional features such as inserting text.',
      maxTokens: 4097,
      trainingData: 'Up to Jun 2021'
    },
    {
      name: 'text-davinci-002',
      description: 'Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning',
      maxTokens: 4097,
      trainingData: 'Up to Jun 2021'
    },
    {
      name: 'code-davinci-002',
      description: 'Optimized for code-completion tasks',
      maxTokens: 8001,
      trainingData: 'Up to Jun 2021'
    },
    {
      name: 'text-curie-001',
      description: 'Very capable, faster and lower cost than Davinci.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    },
    {
      name: 'text-babbage-001',
      description: 'Capable of straightforward tasks, very fast, and lower cost.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    },
    {
      name: 'text-ada-001',
      description: 'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    },
    {
      name: 'davinci',
      description: 'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    },
    {
      name: 'curie',
      description: 'Very capable, but faster and lower cost than Davinci.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    },
    {
      name: 'babbage',
      description: 'Capable of straightforward tasks, very fast, and lower cost.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    },
    {
      name: 'ada',
      description: 'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
      maxTokens: 2049,
      trainingData: 'Up to Oct 2019'
    }
];

function openai_model_tokens(model) {
    const targetModel = models.find(m => m.name === model);
    if (targetModel) {
      return targetModel.maxTokens;
    } else {
      throw new Error(`Model ${model} not found.`);
    }
}

export default openai_model_tokens;