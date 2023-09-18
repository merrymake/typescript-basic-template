import {
  merrymakeService,
  MIME_TYPES,
  replyToOrigin,
} from "@merrymake/service";

async function handleHello(payloadBuffer: Buffer) {
  let payload = payloadBuffer.toString();
  replyToOrigin(`Hello, ${payload}!`, { contentType: MIME_TYPES.txt });
}

merrymakeService({
  handleHello,
});
