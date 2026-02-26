import { render } from '@testing-library/react';
import { Pill } from './Pill';
import { expect, test, vi } from 'vitest';
// Mock the Slot component to avoid React.Children.only error in asChild tests
vi.mock('@radix-ui/react-slot', () => ({
  Slot: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => <div {...props}>{children}</div>,
}));
test('renders Pill component', () => {
  const { container } = render(<Pill>Test</Pill>);
  expect(container.querySelector('div')).toBeTruthy();
});

test('renders Pill with children', () => {
  const { container } = render(<Pill>Test</Pill>);
  expect(container.querySelector('div')?.textContent).toEqual('Test');
});
test('renders as a <div> when asChild is not specified', () => {
  const { getByTestId } = render(
    <Pill data-testid="pill-component">Pill</Pill>
  );
  const element = getByTestId('pill-component');
  expect(element.tagName).toBe('DIV');
});
test('renders the child element directly when asChild is true', () => {
  const { getByTestId } = render(
    <Pill asChild>
      <span data-testid="child-span">Child</span>
    </Pill>
  );
  const element = getByTestId('child-span');
  expect(element.tagName).toBe('SPAN');
});
test('renders as <div> wrapping the child element when asChild is false', () => {
  const { getByTestId } = render(
    <Pill data-testid="wrapper-div" asChild={false}>
      <p data-testid="inner-p">Inner Content</p>
    </Pill>
  );
  const wrapperDiv = getByTestId('wrapper-div');
  const innerP = getByTestId('inner-p');
  expect(wrapperDiv.tagName).toBe('DIV');
  expect(wrapperDiv).toContain(innerP);
});
test('render Pill with different variants', () => {
  const { container: neutralContainer } = render(
    <Pill variant="neutral">Neutral Pill</Pill>
  );
  const { container: errorContainer } = render(
    <Pill variant="error">Error Pill</Pill>
  );

  expect(neutralContainer.querySelector('.bg-neutral-100'));
  expect(errorContainer.querySelector('.bg-red-100'));
});
test('render Pill with emphasis variant', () => {
  const { container: infoEmphasisContainer } = render(
    <Pill variant="info" emphasis>
      Info Pill
    </Pill>
  );
  const { container: warningEmphasiContainer } = render(
    <Pill variant="warning" emphasis>
      Warning Pill
    </Pill>
  );

  expect(infoEmphasisContainer.querySelector('.bg-blue-600'));
  expect(warningEmphasiContainer.querySelector('.bg-yellow-100'));
test('renders Pill with left icon when icon placement is left', () => {
  const LeftIcon = () => <span data-testid="left-icon">L</span>;
  const { getByTestId } = render(<Pill leftIcon={<LeftIcon />} />);
  expect(getByTestId('left-icon')).toBeTruthy();
});

test('renders Pill with right icon when icon placement is right', () => {
  const RightIcon = () => <span data-testid="right-icon">L</span>;

  const { getByTestId } = render(<Pill rightIcon={<RightIcon />} />);
  expect(getByTestId('right-icon')).toBeTruthy();
});
test('renders Pill with both icon when icon placement is both', () => {
  const RightIcon = () => <span data-testid="right-icon">R</span>;
  const LeftIcon = () => <span data-testid="left-icon">L</span>;

  const { getByTestId } = render(
    <Pill leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />
  );
  expect(getByTestId('right-icon')).toBeTruthy();
  expect(getByTestId('left-icon')).toBeTruthy();
});
});
test('renders Pill with no icons icon placement is none', () => {
  const { getByText } = render(<Pill>No Icons</Pill>);
  expect(getByText('No Icons')).toBeTruthy();
});
