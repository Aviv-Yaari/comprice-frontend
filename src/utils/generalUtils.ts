export async function mockDelay (time: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, time));
};
