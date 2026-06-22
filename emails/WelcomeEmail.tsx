import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface WelcomeEmailProps {
  name?: string;
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to notality 🎵</Preview>
      <Body style={body}>
        <Container style={container}>

          <Section style={header}>
            <Text style={logo}>notality</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>
              Hey{name ? ` ${name}` : ' there'} 👋
            </Heading>

            <Text style={paragraph}>
              Thanks so much for signing up — it genuinely means a lot to have you here.
            </Text>

            <Text style={paragraph}>
              notality is still in the works, but when it's ready to launch,
              you'll be the first in the world to know. No fanfare needed on
              your end — just keep an eye on your inbox.
            </Text>

            <Text style={paragraph}>
              Talk soon,<br />
              <strong>The notality team</strong>
            </Text>
          </Section>

          <Hr style={rule} />

          <Section>
            <Text style={footer}>
              © 2026 Notality. Tonality through Notality.
            </Text>
            <Text style={footer}>
              You're receiving this because you signed up at notality.co.uk
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

WelcomeEmail.PreviewProps = {
  name: 'Shaan',
} satisfies WelcomeEmailProps;

const body: React.CSSProperties = {
  backgroundColor: '#f2f3f7',
  fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const container: React.CSSProperties = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px',
};

const header: React.CSSProperties = {
  backgroundColor: '#eceeed',
  borderRadius: '12px 12px 0 0',
  padding: '24px 40px',
};

const logo: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: '800',
  color: '#1d3557',
  margin: '0',
  letterSpacing: '-0.5px',
};

const content: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '40px',
};

const heading: React.CSSProperties = {
  fontSize: '26px',
  fontWeight: '800',
  color: '#1d3557',
  margin: '0 0 24px',
  letterSpacing: '-0.5px',
};

const paragraph: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#2d3748',
  margin: '0 0 16px',
};

const rule: React.CSSProperties = {
  borderColor: '#e2e8f0',
  margin: '0',
};

const footer: React.CSSProperties = {
  fontSize: '12px',
  color: '#718096',
  textAlign: 'center',
  margin: '4px 0',
};
