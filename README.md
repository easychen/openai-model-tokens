# openai-model-tokens

## made by GPT

```
你是一个有资深经验的程序员，请根据以下数据编写一个 npm package，封装函数 openai_model_tokens ，传入 model，返回这个 model 可以接收的最大的 token 数量。
```

## demo

```
import openai_model_tokens from 'openai-model-tokens'

console.log( openai_model_tokens('gpt-4') );
console.log( openai_model_tokens('gpt-4-32k') );
console.log( openai_model_tokens('gpt-3.5-turbo-16k') );
```
