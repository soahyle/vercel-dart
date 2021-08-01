import yaml from 'js-yaml'

export function makePubspec(
  input: string,
  pkg: string | { git: { url: string; path: string } }
): string {
  const data = (yaml.load(input) as any) ?? {}

  const yamlDump = yaml.dump({
    ...data,
    dependencies: {
      ...(data?.dependencies ?? {}),
      vercel_dart: pkg,
    },
  })

  console.log(yamlDump)
  return yamlDump
}
