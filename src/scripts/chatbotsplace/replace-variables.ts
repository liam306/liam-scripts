interface IVariable {
  name: string;
  value: string;
}

const replaceAll = (
  originalString: string,
  search: string,
  replacement: string,
) => {
  // @ts-ignore
  if (String.prototype.replaceAll) {
    return originalString.replaceAll(search, replacement);
  } else {
    // Ensure 'search' is a string to escape special regex characters correctly
    const searchRegExp = new RegExp(
      search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      'g',
    );
    console.log({ searchRegExp });
    return originalString.replace(searchRegExp, replacement);
  }
};

const replaceVariables = (template: string, variables: IVariable[]) => {
  for (const variable of variables) {
    template = replaceAll(
      template,
      `{{${variable.name}}}`,
      variable.value.trim(),
    );
  }
  return template;
};

// const template =
//   'Please write an essay for me on the topic of {{TOPIC}}, using a {{TONE}} tone, at a {{LEVEL}} level, and with a length of about {{WORDS}} words.';
const template =
  '为我写一篇关于{{TOPIC}}的中文论文，语气为{{TONE}}，水平为{{LEVEL}}，长度大约为{{WORDS}}字。请尽量自然地撰写，避免抄袭，并尽量避免被AI检测工具识别。';

const variables: IVariable[] = [
  { name: 'TOPIC', value: 'the importance of learning JavaScript' },
  { name: 'TONE', value: 'formal' },
  { name: 'LEVEL', value: 'high school' },
  { name: 'WORDS', value: '500' },
];

const result = replaceVariables(template, variables);

console.log(result);
