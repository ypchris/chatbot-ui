import { FC, useContext } from 'react';

import { useTranslation } from 'next-i18next';

import { DEFAULT_MAX_TOKENS } from '@/utils/app/const';

import HomeContext from '@/pages/api/home/home.context';

import { Slider } from './Slider';

interface Props {
  label: string;
  onChangeMaxTokens: (maxTokens: number) => void;
}

export const MaxTokensSlider: FC<Props> = ({
  label,
  onChangeMaxTokens,
}) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const lastConversation = conversations[conversations.length - 1];

  const { t } = useTranslation('chat');

  return (
    <Slider
      label={label}
      initialValue={lastConversation?.maxTokens ?? DEFAULT_MAX_TOKENS}
      description={t(
        'Higher values (e.g. 2048) allow longer responses, lower values (e.g. 100) restrict output length.',
      )}
      min={100}
      max={2048}
      step={1}
      precise={0}
      onChange={onChangeMaxTokens}
    />
  );
};
