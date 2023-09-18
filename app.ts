import {
  Envelope,
  merrymakeService,
  replyToOrigin,
  Log,
} from "@merrymake/service";

async function handleHello(payloadBuffer: Buffer, envelope: Envelope) {
  const payload = payloadBuffer.toString();
  Log.info("Sent a reply back");
  replyToOrigin({
    content: `Hello, ${payload}!`,
  });
}

merrymakeService({
  handleHello,
});
