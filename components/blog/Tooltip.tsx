import React from 'react';
import { theme, styled, keyframes, Text, Box, Switch, Flex, Link } from '@modulz/design-system';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-panel-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-panel-height)' },
  to: { height: 0 },
});

const StyledButton = styled(Tooltip.Trigger, {
  all: 'unset',
  borderRadius: '$round',
  padding: '$2',
  width: '$4',
  height: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$3',
  backgroundColor: theme.colors.violet300.value,
  color: theme.colors.violet900.value,

  '&:hover': {
    backgroundColor: theme.colors.violet100.value,
  },
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.colors.violet700.value}`,
  },
});

const StyledContent = styled(Tooltip.Content, {
  borderRadius: '$2',
  padding: '$2 $3',
  fontSize: '$3',
  lineHeight: '19px',
  color: 'white',
  backgroundColor: theme.colors.violet1000.value,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});
const StyledArrow = styled(Tooltip.Arrow, {
  fill: theme.colors.violet1000.value,
});

export const TooltipDemo = (props) => {
  return (
    <Box
      css={{
        background: 'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: '$9',
        mx: '-$5',
        height: 600,

        '@bp2': { borderRadius: '$2' },
        '@bp3': { mx: '-$8' },
      }}
    >
      {/* <Box
        css={{
          borderRadius: '$1',
          px: '$2',
          position: 'absolute',
          top: '$3',
          left: '$3',
          backgroundColor: 'rgba(0 0 0 / 0.1)',
          width: 200,
        }}
      >
        <Flex as="label" css={{ my: '$2', alignItems: 'center' }}>
          <Text size="2" css={{ userSelect: 'none', color: 'white', flex: '1' }}>
            Show chevrons
          </Text>
          <Switch
            css={{ border: 'none' }}
            checked={showChevrons}
            onCheckedChange={(event) => setShowChevrons(event.target.checked)}
          />
        </Flex>
      </Box> */}

      <Box>
        <Tooltip.Root>
          <StyledButton>
            <PlusIcon />
          </StyledButton>
          <StyledContent>
            Add to library.
            <StyledArrow />
          </StyledContent>
        </Tooltip.Root>
      </Box>
    </Box>
  );
};
