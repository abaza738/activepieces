import { PieceAuth, createPiece } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { concat } from './lib/actions/concat';
import { find } from './lib/actions/find';
import { htmlToMarkdown } from './lib/actions/html-to-markdown';
import { markdownToHTML } from './lib/actions/markdown-to-html';
import { replace } from './lib/actions/replace';
import { split } from './lib/actions/split';

export const textHelper = createPiece({
  displayName: 'Text Helper',
  auth: PieceAuth.None(),
  logoUrl: 'https://cdn.activepieces.com/pieces/text-helper.svg',
  authors: ['abaza738', 'joeworkman', 'AbdulTheActivePiecer'],
  categories: [PieceCategory.OTHER],
  actions: [concat, replace, split, find, markdownToHTML, htmlToMarkdown],
  triggers: [],
});
