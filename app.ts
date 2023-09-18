import { Envelope, merrymakeService, replyToOrigin } from "@merrymake/service";

async function handleHello(payloadBuffer: Buffer, envelope: Envelope) {
  const payload = payloadBuffer.toString();
  replyToOrigin({
    content: `Hello, ${payload}!`,
  });
}

merrymakeService({
  handleHello,
});
