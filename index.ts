import {
  merrymakeService,
  MIME_TYPES,
  replyToOrigin,
} from "@merrymake/service";

async function handleHello(payloadBuffer: Buffer) {
  let payload = payloadBuffer.toString();
  replyToOrigin(`Hello, ${payload}!`, MIME_TYPES.txt);
}

merrymakeService({
  handleHello,
});
