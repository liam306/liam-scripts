export type WalletName =
  | 'admin'
  | 'store'
  | 'logarithmik'
  | 'tan3006'
  | 'tan_01';

export const WALLET_PRIVATE_KEY: Record<WalletName, string> = {
  admin: process.env.ADMIN_WALLET_PRIVATE_KEY!,
  store: process.env.STORE_WALLET_PRIVATE_KEY!,

  logarithmik: process.env.LOGARITHMIK_WALLET_PRIVATE_KEY!,
  tan3006: process.env.TAN3006_WALLET_PRIVATE_KEY!,
  tan_01: process.env.TAN_01_WALLET_PRIVATE_KEY!,
};

export const WALLET_ADDRESS: Record<WalletName, string> = {
  admin: '0x9999797Ba1FC61bF928f1e0319c35A484780696e',
  store: '0x33336cC48c8e8B428776c4cf943F04512262B540',

  logarithmik: '0x018837fa9e0240910c080c9b34675fe8a032b6e5',
  tan3006: '0x3ab82e7f6184c7b05468734b6e6455fd027cc573',
  tan_01: '0x933b559bc574c1e6df54229ff9b3b88f55350bf3',
};
