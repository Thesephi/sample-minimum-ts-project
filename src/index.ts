// just something simple stupid to demonstrate the use of TypeScript

export async function getTheTruth(): Promise<boolean> {
  const prom: Promise<boolean> = new Promise((resolve, reject): void => {
    setTimeout((): void => resolve(true), 1000);
  });
  return prom;
}

async function main(): Promise<void> {
  const theTruth: boolean = await getTheTruth();
  console.log(theTruth);
}

main();
