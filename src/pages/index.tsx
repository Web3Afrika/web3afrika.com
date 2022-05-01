import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useBreakpointValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import DeveloperDaoLogo from '../components/Logo';

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Stack
        as="main"
        minH="100vh"
        spacing={{ base: 6, md: 8 }}
        divider={
          <StackDivider
            h="2px"
            rounded="sm"
            bgGradient="linear(to-r, red.300, orange.300, yellow.300, green.300, blue.300, purple.300, pink.300)"
          />
        }
      >
        <Heading as="h1" fontSize="xl">
          {/* <DeveloperDaoLogo /> */}
        </Heading>

        <Stack spacing={{ base: 10, md: 12 }}>
          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('mission.title')}
            </Heading>
            <Text>{t('mission.body')}</Text>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('values.title')}
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.access.title')}
                </Text>
                : {t('values.access.body')}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.diversity.title')}
                </Text>
                : {t('values.diversity.body')}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.responsibility.title')}
                </Text>
                : {t('values.responsibility.body')}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.kindness.title')}
                </Text>
                : {t('values.kindness.body')}
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('goals.title')}
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>{t('goals.body1')}</ListItem>
              <ListItem>{t('goals.body2')}</ListItem>
            </UnorderedList>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('membership.title')}
            </Heading>
            <Text>{t('membership.body')}</Text>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('links.title')}
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <a href="https://web3afrika.notion.site/Web3Afrika-6ff3052980444d6b91b2808cdfb4c9e0">
                  {t('links.wiki')}
                </a>
              </ListItem>
              <ListItem>
                <a href="https://blog.web3afrika.com/">{t('links.blog')}</a>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>

        <VStack spacing={4}>
          <HStack as="footer" justify="center">
            <SocialIconLink
              href="https://twitter.com/web3afrika"
              label="Twitter"
            >
              <>
                <FaTwitter />
                <VisuallyHidden>
                  {t('socialLinkLabel', { platform: 'Twitter' })}
                </VisuallyHidden>
              </>
            </SocialIconLink>
            <SocialIconLink href="#" label="Discord">
              <>
                <FaDiscord />
                <VisuallyHidden>
                  {t('socialLinkLabel', { platform: 'Discord' })}
                </VisuallyHidden>
              </>
            </SocialIconLink>
            <SocialIconLink href="https://github.com/Web3Afrika" label="GitHub">
              <>
                <FaGithub />
                <VisuallyHidden>
                  {t('socialLinkLabel', { platform: 'GitHub' })}
                </VisuallyHidden>
              </>
            </SocialIconLink>
          </HStack>

          <HStack
            as="a"
            href="https://vercel.com/?utm_source=developerdao&utm_campaign=oss"
            fontSize="sm"
          >
            <Text>Powered by</Text>
            <Flex align="center">
              <Image
                src="/vercel-logotype-light.svg"
                alt="Vercel"
                width="100px"
                height="22px"
              />
            </Flex>
          </HStack>
        </VStack>
      </Stack>
    </Container>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const SocialIconLink = ({
  children,
  href,
  label,
}: {
  children: ReactElement;
  href: string;
  label: string;
}) => {
  return (
    <IconButton
      as="a"
      aria-label={label}
      cursor="pointer"
      href={href}
      icon={children}
      size="lg"
      variant="ghost"
    />
  );
};
