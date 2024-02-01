import { createCustomApiCallAction } from '@activepieces/pieces-common';
import { PieceAuth, createPiece } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { createCredential } from './lib/actions/create-credential';
import { certopusCommon } from './lib/common';

export const certopusAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'API key acquired from your Certopus profile',
});

export const certopus = createPiece({
  displayName: 'Certopus',
  minimumSupportedRelease: '0.5.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/certopus.png',
  categories: [PieceCategory.OTHER],
  authors: ['VrajGohil'],
  auth: certopusAuth,
  actions: [
    createCredential,
    createCustomApiCallAction({
      baseUrl: () => certopusCommon.baseUrl, // Replace with the actual base URL
      auth: certopusAuth,
      authMapping: (auth) => ({
        'x-api-key': `${auth}`,
      }),
    }),
  ],
  triggers: [],
});
