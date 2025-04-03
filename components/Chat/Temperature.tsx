import { FC, useContext } from 'react';

import { useTranslation } from 'next-i18next';

import { DEFAULT_TEMPERATURE } from '@/utils/app/const';

import HomeContext from '@/pages/api/home/home.context';

import { Slider } from './Slider';

interface Props {
  label: string;
  onChangeTemperature: (temperature: number) => void;
}

export const TemperatureSlider: FC<Props> = ({
  label,
  onChangeTemperature,
}) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const lastConversation = conversations[conversations.length - 1];
  const { t } = useTranslation('chat');

  const footer = (
    <ul className="w mt-2 pb-8 flex justify-between px-[24px] text-neutral-900 dark:text-neutral-100">
      <li className="flex justify-center">
        <span className="absolute">{t('Precise')}</span>
      </li>
      <li className="flex justify-center">
        <span className="absolute">{t('Neutral')}</span>
      </li>
      <li className="flex justify-center">
        <span className="absolute">{t('Creative')}</span>
      </li>
    </ul>
  );

  return (
    <Slider
      label={label}
      initialValue={lastConversation?.temperature ?? DEFAULT_TEMPERATURE}
      description={t(
        'Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
      )}
      min={0}
      max={1}
      step={0.1}
      onChange={onChangeTemperature}
      footer={footer}
    />
  );
};
