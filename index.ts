import {
  merrymakeService,
  type PayloadBufferPromise,
  MIME_TYPES,
  replyToOrigin,
} from "@merrymake/service";

async function handleHello(payloadBufferPromise: PayloadBufferPromise) {
  let payloadBuffer = await payloadBufferPromise;
  let payload = payloadBuffer.toString();
  replyToOrigin(`Hello, ${payload}!`, MIME_TYPES.txt);
}

merrymakeService({
  handleHello,
});
