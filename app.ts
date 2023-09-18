import { Envelope, merrymakeService, replyToOrigin } from "@merrymake/service";

async function handleHello(payloadBuffer: Buffer, envelope: Envelope) {
  let payload = payloadBuffer.toString();
  replyToOrigin({
    content: `Hello, ${payload}!`,
  });
}

merrymakeService({
  handleHello,
});
