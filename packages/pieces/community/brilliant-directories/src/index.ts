import { createCustomApiCallAction } from '@activepieces/pieces-common';
import {
  createPiece,
  PieceAuth,
  Property,
} from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { createNewUser } from './lib/actions/create-new-user';

export const brilliantDirectoriesAuth = PieceAuth.CustomAuth({
  required: true,
  description: `
  Brilliant Directories Authentication.

  Please enter your API key which can be generated from here: https://ww2.managemydirectory.com/admin/apiSettings

  Then enter your brilliant directories website instance URL appended with /api like the example.
  `,
  props: {
    api_key: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'The api key of the brilliant directories account account',
      required: true,
    }),
    site_url: Property.ShortText({
      displayName: 'Instance Url',
      description: 'The url of the brillant directories instance.',
      required: true,
      defaultValue: 'https://yoursitehere.com/api',
    }),
  },
});

export const brilliantDirectories = createPiece({
  displayName: 'Brilliant Directories',
  auth: brilliantDirectoriesAuth,
  minimumSupportedRelease: '0.9.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/brilliant-directories.png',
  categories: [PieceCategory.OTHER],
  authors: ['Shay Punter @ PunterDigital', 'Tim M'],
  actions: [
    createNewUser,
    createCustomApiCallAction({
      baseUrl: (auth) => (auth as { site_url: string }).site_url,
      auth: brilliantDirectoriesAuth,
      authMapping: (auth) => ({
        'X-Api-Key': `${(auth as { api_key: string }).api_key}`,
      }),
    }),
  ],
  triggers: [],
});
