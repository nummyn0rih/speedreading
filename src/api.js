import { SCHULTE, WEDGE, LANDOLT } from './constants';

export default {
  [SCHULTE]: [
    {
      id: 'size',
      name: 'Размер таблицы',
      current: 5,
      children: [
        { id: 3, value: '3 x 3' },
        { id: 4, value: '4 x 4' },
        { id: 5, value: '5 x 5' },
        { id: 6, value: '6 x 6' },
        { id: 7, value: '7 x 7' },
      ],
    },
    {
      id: 'type',
      name: 'Тип таблицы',
      current: 'numbers',
      children: [
        { id: 'numbers', value: 'Числовая' },
        { id: 'letters', value: 'Буквенная' },
      ],
    },
    {
      id: 'view',
      name: 'Стиль таблицы',
      current: 'withBorder',
      children: [
        { id: 'withBorder', value: 'С рамками' },
        { id: 'withoutBorder', value: 'Без рамок' },
      ],
    },
  ],
  [WEDGE]: [
    {
      id: 'size',
      name: 'Размер таблицы',
      current: 5,
      children: [
        { id: 3, value: '3 x 3' },
        { id: 4, value: '4 x 4' },
        { id: 5, value: '5 x 5' },
        { id: 6, value: '6 x 6' },
        { id: 7, value: '7 x 7' },
      ],
    },
    {
      id: 'type',
      name: 'Тип таблицы',
      current: 'numbers',
      children: [
        { id: 'numbers', value: 'Числовая' },
        { id: 'letters', value: 'Буквенная' },
      ],
    },
    {
      id: 'view',
      name: 'Стиль таблицы',
      current: 'withBorder',
      children: [
        { id: 'withBorder', value: 'С рамками' },
        { id: 'withoutBorder', value: 'Без рамок' },
      ],
    },
  ],
  [LANDOLT]: [
    {
      id: 'size',
      name: 'Размер таблицы',
      current: 5,
      children: [
        { id: 3, value: '3 x 3' },
        { id: 4, value: '4 x 4' },
        { id: 5, value: '5 x 5' },
        { id: 6, value: '6 x 6' },
        { id: 7, value: '7 x 7' },
      ],
    },
    {
      id: 'type',
      name: 'Тип таблицы',
      current: 'numbers',
      children: [
        { id: 'numbers', value: 'Числовая' },
        { id: 'letters', value: 'Буквенная' },
      ],
    },
    {
      id: 'view',
      name: 'Стиль таблицы',
      current: 'withBorder',
      children: [
        { id: 'withBorder', value: 'С рамками' },
        { id: 'withoutBorder', value: 'Без рамок' },
      ],
    },
  ],
};
