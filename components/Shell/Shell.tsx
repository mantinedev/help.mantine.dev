import Link from 'next/link';
import cx from 'clsx';
import { useHotkeys } from '@mantine/hooks';
import {
  AppShell,
  Container,
  RemoveScroll,
  Group,
  useMantineColorScheme,
  Anchor,
  Text,
} from '@mantine/core';
import { ColorSchemeControl, HeaderControls, MantineLogo } from '@mantine/ds';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <AppShell header={{ height: 60 }} className={classes.root}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="md" className={classes.inner}>
          <Link href="/" className={cx('mantine-focus-auto', classes.logo)}>
            <MantineLogo size={30} />
          </Link>

          <HeaderControls
            visibleFrom="sm"
            githubLink="https://github.com/mantine.dev/mantine"
            withDirectionToggle={false}
            withSearch={false}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </AppShell.Main>

      <footer className={classes.footer}>
        <Container size="md" h="100%">
          <Group justify="space-between" align="center" h="100%">
            <Anchor href="https://mantine.dev" target="_blank" c="dimmed" fz="sm">
              mantine.dev
            </Anchor>

            <Text c="dimmed" fz="sm">
              Built by{' '}
              <Anchor
                href="https://github.com/rtivital"
                target="_blank"
                c="dimmed"
                fz="sm"
                underline="always"
              >
                Vitaly Rtishchev
              </Anchor>
            </Text>
          </Group>
        </Container>
      </footer>
    </AppShell>
  );
}
