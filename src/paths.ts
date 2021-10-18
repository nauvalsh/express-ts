import 'module-alias/register';
import { addAliases } from 'module-alias';

addAliases({
  '@models': `${__dirname}/models`
});
