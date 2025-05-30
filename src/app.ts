import { Server } from './application/server';
import "reflect-metadata";


(() => {
  main();
})()


async function main() {
  new Server({}).start()
}