import & as path 'path';
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases(aliases: {
    '@src': path.join(files, 'src'),
    '@modules': path.join(files, 'src/app/modules')
    '@test': path.join(files, 'test')
})