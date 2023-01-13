import { FolderTheme } from '../models/index';

/**
 * Defines folder icons
 */
export const folderIcons: FolderTheme[] = [
  {
    name: 'specific',
    defaultIcon: { name: 'folder' },
    rootFolder: { name: 'folder-root' },
    icons: [
      // region [A]
      {
        name: 'acf',
        folderNames: ['acf', 'acf-json', 'acf-jsons'],
      },
      {
        name: 'acre',
        folderNames: ['acre'],
      },
      {
        name: 'adapter',
        folderNames: ['adapter', 'adapters'],
      },
      {
        name: 'addon',
        folderNames: ['addon', 'addons'],
      },
      {
        name: 'admin',
        folderNames: ['admin', 'admins'],
      },
      {
        name: 'adr',
        folderNames: ['adr', 'adrs', 'decision', 'decisions'],
      },
      {
        name: 'agda',
        folderNames: ['agda'],
      },
      {
        name: 'alacritty',
        folderNames: ['alacritty'],
      },
      {
        name: 'android',
        folderNames: ['android', 'androidApp'],
      },
      {
        name: 'angular',
        folderNames: ['angular', 'ng', 'ngApp'],
      },
      {
        name: 'animations',
        folderNames: ['anim', 'animated', 'animation', 'animations', 'anims'],
      },
      {
        name: 'ansible',
        folderNames: [
          'ansible',
          'group_vars',
          'host_vars',
          'playbooks',
          'roles',
          'vars',
        ],
      },
      {
        name: 'api',
        folderNames: ['api', 'apis', 'openapi', 'rest', 'swagger'],
      },
      {
        name: 'apollo',
        folderNames: [
          'apollo',
          'apollo-cache',
          'apollo-client',
          'apollo-config',
        ],
      },
      {
        name: 'app',
        folderNames: ['app', 'apps', 'application', 'applications'],
      },
      {
        name: 'appstore',
        folderNames: [
          'xccheckout',
          'xcodeproj',
          'xcshareddata',
          'xcuserdata',
          'xcworkspace',
        ],
      },
      {
        name: 'archetype',
        folderNames: ['archetype', 'archetypes', 'schematic', 'schematics'],
      },
      {
        name: 'archive',
        folderNames: [
          'archive',
          'archives',
          'backup',
          'backups',
          'jar',
          'jars',
          'tar',
          'tars',
          'zip',
          'zips',
        ],
      },
      {
        name: 'article',
        folderNames: ['article', 'articles'],
      },
      {
        name: 'arttext',
        folderNames: ['art', 'arts', 'arttext', 'artx', 'wordart', 'wordarts'],
      },
      {
        name: 'atom',
        folderNames: [
          'atom',
          'atom-ci',
          'atom-packages',
          'atom-snippets',
          'atom-syntax',
          'atom-themes',
          'atoms',
        ],
      },
      {
        name: 'automator',
        folderNames: [
          'action',
          'actions',
          'automator',
          'automation',
          'automations',
          'caction',
          'cactions',
          'definition',
          'definitions',
          'workflow',
          'workflows',
        ],
      },
      {
        name: 'audio',
        folderNames: [
          'aud',
          'audio',
          'audios',
          'bgm',
          'bgms',
          'mp3',
          'mp4',
          'music',
          'musics',
          'midi',
          'midis',
          'ost',
          'osts',
          'sfx',
          'snd',
          'sound',
          'sounds',
          'soundtrack',
          'soundtracks',
          'wav',
          'wavs',
        ],
      },
      {
        name: 'aurelia',
        folderNames: ['aurelia', 'aurelia_project'],
      },
      {
        name: 'aws',
        folderNames: [
          'amazon',
          'athena',
          'aws',
          'aws-lambda',
          'cloudfront',
          'ecr',
          'ecs',
          's3',
          'tableau',
        ],
      },
      {
        name: 'azure-devops',
        folderNames: [
          'azure',
          'azure-devop',
          'azure-devops',
          'azuredevop',
          'azuredevops',
        ],
      },
      {
        name: 'azure-pipelines',
        folderNames: [
          'azure-pipelines',
          'azure-pipelines-ci',
          'azurepipelines',
        ],
      },
      // endregion

      // region [B]
      {
        name: 'base',
        folderNames: [
          'abstract',
          'abstracts',
          'base',
          'bases',
          'parent',
          'parents',
        ],
      },
      {
        name: 'bazaar',
        folderNames: ['bazaar', 'bzr'],
      },
      {
        name: 'benchmark',
        folderNames: [
          'benchmark',
          'benchmarks',
          'hprof',
          'measure',
          'measures',
          'perf',
          'performance',
          'performances',
          'perfs',
          'profiler',
          'profilers',
        ],
      },
      {
        name: 'bitcoin',
        folderNames: ['bitcoin'],
      },
      {
        name: 'bloc',
        folderNames: ['bloc', 'blocs'],
      },
      {
        name: 'blueprint',
        folderNames: ['blueprint', 'blueprints'],
      },
      {
        name: 'bower',
        folderNames: ['bower', 'bower_components'],
      },
      {
        name: 'buildkite',
        folderNames: ['buildkite'],
      },
      // endregion

      // region [C]
      {
        name: 'cabal',
        folderNames: ['cabal'],
      },
      {
        name: 'cake',
        folderNames: ['cake'],
      },
      {
        name: 'cart',
        folderNames: [
          'basket',
          'baskets',
          'cart',
          'carts',
          'marketing',
          'shop',
          'shops',
        ],
      },
      {
        name: 'channels',
        folderNames: ['channel', 'channels'],
      },
      {
        name: 'chef',
        folderNames: ['chef', 'recipe', 'recipes'],
      },
      {
        name: 'ci',
        folderNames: ['ci', 'integration', 'integrations'],
      },
      {
        name: 'client',
        folderNames: ['client', 'clients', 'frontend', 'frontends', 'pwa'],
      },
      {
        name: 'circleci',
        folderNames: ['circleci'],
      },
      {
        name: 'cluster',
        folderNames: ['cluster', 'clusters', 'node', 'nodes'],
      },
      {
        name: 'cmake',
        folderNames: ['cmake', 'cmake-build-debug', 'cmake-build-release'],
      },
      {
        name: 'cnab',
        folderNames: ['cnab'],
      },
      {
        name: 'cobol',
        folderNames: ['cobol'],
      },
      {
        name: 'codesandbox',
        folderNames: ['codesandbox'],
      },
      {
        name: 'components',
        folderNames: [
          'component',
          'components',
          'directive',
          'directives',
          'element',
          'elements',
          'ui',
          'widget',
          'widgets',
        ],
      },
      {
        name: 'composer',
        folderNames: ['composer', 'composer'],
      },
      {
        name: 'config',
        folderNames: [
          'cfg',
          'conf',
          'config',
          'configs',
          'configuration',
          'configurations',
          'setting',
          'settings',
        ],
      },
      {
        name: 'connection',
        folderNames: [
          'connect',
          'connection',
          'connections',
          'link',
          'links',
          'rel',
          'relation',
          'relations',
        ],
      },
      {
        name: 'container',
        folderNames: [
          'container',
          'containers',
          'devcontainer',
          'devcontainers',
        ],
      },
      {
        name: 'content',
        folderNames: ['content', 'contents', 'context', 'contexts', 'cont'],
      },
      {
        name: 'contract',
        folderNames: ['contract', 'contracts', 'pact', 'pacts'],
      },
      {
        name: 'controllers',
        folderNames: ['controller', 'controllers', 'ctrl', 'ctrls'],
      },
      {
        name: 'core',
        folderNames: [
          'bin',
          'binaries',
          'binary',
          'core',
          'cores',
          'io',
          'support',
        ],
      },
      {
        name: 'coverage',
        folderNames: ['coverage', 'coverages', 'cov', 'lcov'],
      },
      {
        name: 'crates',
        folderNames: ['crate', 'crates'],
      },
      {
        name: 'cron',
        folderNames: ['cron', 'crontab', 'schedule', 'schedules', 'scheduler'],
      },
      {
        name: 'cubit',
        folderNames: ['cubit', 'cubits'],
      },
      {
        name: 'cue',
        folderNames: ['cue', 'cue.mod'],
      },
      {
        name: 'custom',
        folderNames: ['custom', 'random'],
      },
      {
        name: 'cvs',
        folderNames: ['cvs'],
      },
      {
        name: 'cypress',
        folderNames: ['cypress'],
      },

      // endregion

      // region [D]
      {
        name: 'dapr',
        folderNames: ['dapr'],
      },
      {
        name: 'db',
        folderNames: [
          'database',
          'databases',
          'db',
          'migrate',
          'migrations',
          'repo',
          'repos',
          'repositories',
          'repository',
        ],
      },
      {
        name: 'debian',
        folderNames: ['debian', 'deb'],
      },
      {
        name: 'debug',
        folderNames: [
          'bug',
          'bugs',
          'debug',
          'debugger',
          'debuggers',
          'debugging',
        ],
      },
      {
        name: 'decorators',
        folderNames: ['annotation', 'annotations', 'decorator', 'decorators'],
      },
      {
        name: 'delta',
        folderNames: ['delta', 'deltas', 'diff', 'diffs'],
      },
      {
        name: 'deno',
        folderNames: ['deno'],
      },
      {
        name: 'dependabot',
        folderNames: ['dependabot'],
      },
      {
        name: 'deploy',
        folderNames: [
          'deploy',
          'deployer',
          'deployment',
          'deployments',
          'deploys',
        ],
      },
      {
        name: 'devcontainer',
        folderNames: ['devcontainer', 'devcontainers'],
      },
      {
        name: 'dist',
        folderNames: [
          'build',
          'dist',
          'distribution',
          'distributions',
          'out',
          'output',
          'release',
          'releases',
        ],
      },
      {
        name: 'docker',
        folderNames: ['docker', 'dockerfile', 'dockerfiles'],
      },
      {
        name: 'docs',
        folderNames: [
          'doc',
          'docs',
          'documentation',
          'documentations',
          'text',
          'texts',
        ],
      },
      {
        name: 'domain',
        folderNames: ['domain', 'domains'],
      },
      {
        name: 'download',
        folderNames: ['download', 'downloads', 'dl', 'dls'],
      },
      {
        name: 'dropbox',
        folderNames: ['dropbox', 'dropbox.cache'],
      },
      {
        name: 'dub',
        folderNames: ['dub'],
      },
      {
        name: 'dump',
        folderNames: ['dump', 'dumps'],
      },
      {
        name: 'dvc',
        folderNames: ['dvc'],
      },
      // endregion

      // region [E]
      {
        name: 'e2e',
        folderNames: ['e2e', 'e2e-tests', 'scenario', 'scenarios'],
      },
      {
        name: 'elastic',
        folderNames: [
          'eb-extensions',
          'elastic',
          'elasticbeanstalk',
          'elasticsearch',
        ],
      },
      {
        name: 'electron',
        folderNames: ['electron', 'electron-builder'],
      },
      {
        name: 'elixir',
        folderNames: ['eex', 'elixir', 'elixir_ls', 'ex', 'leex'],
      },
      {
        name: 'emacs',
        folderNames: ['emacs', 'emacs.d'],
      },
      {
        name: 'env',
        folderNames: ['env', 'envs', 'environment', 'environments'],
      },
      {
        name: 'error',
        folderNames: [
          'error',
          'errors',
          'exception',
          'exceptions',
          'prod',
          'production',
        ],
      },
      {
        name: 'event',
        folderNames: ['event', 'events'],
      },
      {
        name: 'example',
        folderNames: [
          'demo',
          'demos',
          'example',
          'examples',
          'sample',
          'samples',
        ],
      },
      {
        name: 'exclude',
        folderNames: [
          'exclude',
          'excludes',
          'export',
          'exported',
          'exports',
          'ignore',
          'ignores',
        ],
      },
      {
        name: 'expo',
        folderNames: ['expo', 'expo-shared'],
      },

      // endregion

      // region [F]
      {
        name: 'fastlane',
        folderNames: ['fastlane'],
      },
      {
        name: 'faq',
        folderNames: ['faq', 'faqs'],
      },
      {
        name: 'feature',
        folderNames: ['feature', 'features', 'feat', 'feats'],
      },
      {
        name: 'firebase',
        folderNames: ['firebase'],
      },
      {
        name: 'fixtures',
        folderNames: [
          'fabricator',
          'fabricators',
          'factories',
          'factory',
          'fixture',
          'fixtures',
        ],
      },
      {
        name: 'flow',
        folderNames: ['flow', 'flow-typed', 'def', 'defs'],
      },
      {
        name: 'fonts',
        folderNames: ['font', 'fonts'],
      },
      {
        name: 'functions',
        folderNames: [
          'func',
          'funcs',
          'function',
          'functions',
          'handler',
          'handlers',
          'lambda',
          'lambdas',
          'service',
          'services',
        ],
      },

      // endregion

      // region [G]
      {
        name: 'gcloud',
        folderNames: ['gcloud', 'gcp'],
      },
      {
        name: 'generated',
        folderNames: [
          'auto',
          'autogen',
          'gen',
          'generated',
          'generator',
          'generators',
        ],
      },
      {
        name: 'git',
        folderNames: ['git', 'gitignore', 'gitattributes', 'submodules'],
      },
      {
        name: 'github',
        folderNames: ['github'],
      },
      {
        name: 'gitlab',
        folderNames: ['gitlab'],
      },
      {
        name: 'global',
        folderNames: ['global', 'globals'],
      },
      {
        name: 'gradle',
        folderNames: ['gradle', 'gradles'],
      },
      {
        name: 'graphql',
        folderNames: ['graphql', 'gql', 'schema', 'schemas'],
      },
      {
        name: 'grunt',
        folderNames: ['grunt', 'gruntfile', 'gruntfiles'],
      },
      {
        name: 'guard',
        folderNames: [
          'dev',
          'develop',
          'development',
          'guard',
          'guardfile',
          'guardfiles',
        ],
      },
      {
        name: 'gulp',
        folderNames: ['gulp', 'gulpfile', 'gulpfiles'],
      },

      // endregion

      //     {
      //       name: 'source',
      //       folderNames: ['src', 'srcs', 'source', 'sources', 'code'],
      //     },
      //     {
      //       name: 'folder-src',
      //       folderNames: ['src', 'srcs', 'source', 'sources', 'code'],
      //     },
      //     {
      //       name: 'folder-dist',
      //       folderNames: ['dist', 'out', 'build', 'release', 'bin'],
      //     },
      //     {
      //       name: 'folder-css',
      //       folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles'],
      //     },
      //     { name: 'folder-sass', folderNames: ['sass', '_sass', 'scss', '_scss'] },
      //     {
      //       name: 'folder-images',
      //       folderNames: [
      //         'images',
      //         'image',
      //         'imgs',
      //         'img',
      //         'icons',
      //         'icon',
      //         'icos',
      //         'ico',
      //         'figures',
      //         'figure',
      //         'figs',
      //         'fig',
      //         'screenshot',
      //         'screenshots',
      //         'screengrab',
      //         'screengrabs',
      //         'pic',
      //         'pics',
      //         'picture',
      //         'pictures',
      //       ],
      //     },
      //     { name: 'folder-scripts', folderNames: ['script', 'scripts'] },
      //     { name: 'folder-node', folderNames: ['node_modules'] },
      //     {
      //       name: 'folder-javascript',
      //       folderNames: ['js', 'javascript', 'javascripts'],
      //     },
      //     { name: 'folder-json', folderNames: ['json', 'jsons'] },
      //     { name: 'folder-font', folderNames: ['font', 'fonts'] },
      //     { name: 'folder-bower', folderNames: ['bower_components'] },
      //     {
      //       name: 'folder-test',
      //       folderNames: [
      //         'test',
      //         'tests',
      //         'testing',
      //         '__tests__',
      //         '__snapshots__',
      //         '__mocks__',
      //         '__fixtures__',
      //         '__test__',
      //         'spec',
      //         'specs',
      //       ],
      //     },
      //     {
      //       name: 'folder-jinja',
      //       folderNames: ['jinja', 'jinja2', 'j2'],
      //       light: true,
      //     },
      //     { name: 'folder-markdown', folderNames: ['markdown', 'md'] },
      //     { name: 'folder-php', folderNames: ['php'] },
      //     { name: 'folder-phpmailer', folderNames: ['phpmailer'] },
      //     { name: 'folder-sublime', folderNames: ['sublime'] },
      //     {
      //       name: 'folder-git',
      //       folderNames: [
      //         '.git',
      //         'patches',
      //         'githooks',
      //         '.githooks',
      //         'submodules',
      //         '.submodules',
      //       ],
      //     },
      //     { name: 'folder-github', folderNames: ['.github'] },
      //     { name: 'folder-gitlab', folderNames: ['.gitlab'] },
      //     { name: 'folder-vscode', folderNames: ['.vscode', '.vscode-test'] },
      //     {
      //       name: 'folder-views',
      //       folderNames: [
      //         'view',
      //         'views',
      //         'screen',
      //         'screens',
      //         'page',
      //         'pages',
      //         'html',
      //       ],
      //     },
      //     { name: 'folder-vue', folderNames: ['vue'] },
      //     { name: 'folder-vuepress', folderNames: ['.vuepress'] },
      //     { name: 'folder-expo', folderNames: ['.expo', '.expo-shared'] },
      //     {
      //       name: 'folder-config',
      //       folderNames: [
      //         'cfg',
      //         'cfgs',
      //         'conf',
      //         'confs',
      //         'config',
      //         'configs',
      //         'configuration',
      //         'configurations',
      //         'setting',
      //         '.setting',
      //         'settings',
      //         '.settings',
      //         'META-INF',
      //       ],
      //     },
      //     {
      //       name: 'folder-i18n',
      //       folderNames: [
      //         'i18n',
      //         'internationalization',
      //         'lang',
      //         'langs',
      //         'language',
      //         'languages',
      //         'locale',
      //         'locales',
      //         'l10n',
      //         'localization',
      //         'translation',
      //         'translate',
      //         'translations',
      //         '.tx',
      //       ],
      //     },
      //     {
      //       name: 'folder-components',
      //       folderNames: ['components', 'widget', 'widgets', 'fragments'],
      //     },
      //     {
      //       name: 'folder-verdaccio',
      //       folderNames: ['.verdaccio', 'verdaccio'],
      //     },
      //     { name: 'folder-aurelia', folderNames: ['aurelia_project'] },
      //     {
      //       name: 'folder-resource',
      //       folderNames: [
      //         'resource',
      //         'resources',
      //         'res',
      //         'asset',
      //         'assets',
      //         'static',
      //         'report',
      //         'reports',
      //       ],
      //     },
      //     {
      //       name: 'folder-lib',
      //       folderNames: [
      //         'lib',
      //         'libs',
      //         'library',
      //         'libraries',
      //         'vendor',
      //         'vendors',
      //         'third-party',
      //       ],
      //     },
      //     {
      //       name: 'folder-theme',
      //       folderNames: [
      //         'themes',
      //         'theme',
      //         'color',
      //         'colors',
      //         'design',
      //         'designs',
      //       ],
      //     },
      //     { name: 'folder-webpack', folderNames: ['webpack', '.webpack'] },
      //     { name: 'folder-global', folderNames: ['global'] },
      //     {
      //       name: 'folder-public',
      //       folderNames: ['public', 'www', 'wwwroot', 'web', 'website', 'site'],
      //     },
      //     {
      //       name: 'folder-include',
      //       folderNames: [
      //         'include',
      //         'includes',
      //         '_includes',
      //         'inc',
      //         'partials',
      //         '_partials',
      //       ],
      //     },
      //     {
      //       name: 'folder-docker',
      //       folderNames: ['docker', 'dockerfiles', '.docker'],
      //     },
      //     {
      //       name: 'folder-ngrx-effects',
      //       folderNames: ['effects'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-ngrx-store',
      //       folderNames: ['store'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-ngrx-state',
      //       folderNames: ['states', 'state'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-ngrx-reducer',
      //       folderNames: ['reducers', 'reducer'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-ngrx-actions',
      //       folderNames: ['actions'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-ngrx-entities',
      //       folderNames: ['entities'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-ngrx-selectors',
      //       folderNames: ['selectors'],
      //       enabledFor: [IconPack.Ngrx],
      //     },
      //     {
      //       name: 'folder-redux-reducer',
      //       folderNames: ['reducers', 'reducer'],
      //       enabledFor: [IconPack.Redux],
      //     },
      //     {
      //       name: 'folder-redux-actions',
      //       folderNames: ['actions'],
      //       enabledFor: [IconPack.Redux],
      //     },
      //     {
      //       name: 'folder-redux-selector',
      //       folderNames: ['selectors', 'selector'],
      //       enabledFor: [IconPack.Redux],
      //     },
      //     {
      //       name: 'folder-redux-store',
      //       folderNames: ['store'],
      //       enabledFor: [IconPack.Redux],
      //     },
      //     {
      //       name: 'folder-react-components',
      //       folderNames: ['components', 'react', 'jsx', 'reactjs'],
      //       enabledFor: [IconPack.React, IconPack.Redux],
      //     },
      //     {
      //       name: 'folder-database',
      //       folderNames: ['db', 'database', 'databases', 'sql', 'data', '_data'],
      //     },
      //     { name: 'folder-log', folderNames: ['log', 'logs'] },
      //     { name: 'folder-target', folderNames: ['target'] },
      //     {
      //       name: 'folder-temp',
      //       folderNames: [
      //         'temp',
      //         '.temp',
      //         'tmp',
      //         '.tmp',
      //         'cached',
      //         'cache',
      //         '.cache',
      //       ],
      //     },
      //     {
      //       name: 'folder-video',
      //       folderNames: ['vid', 'vids', 'video', 'videos', 'movie', 'movies'],
      //     },
      //     {
      //       name: 'folder-kubernetes',
      //       folderNames: ['kubernetes', '.kubernetes', 'k8s', '.k8s'],
      //     },
      //     { name: 'folder-import', folderNames: ['import', 'imports', 'imported'] },
      //     { name: 'folder-export', folderNames: ['export', 'exports', 'exported'] },
      //     { name: 'folder-wakatime', folderNames: ['wakatime'] },
      //     { name: 'folder-circleci', folderNames: ['.circleci'] },
      //     {
      //       name: 'folder-wordpress',
      //       folderNames: ['.wordpress-org', 'wp-content'],
      //     },
      //     { name: 'folder-gradle', folderNames: ['gradle', '.gradle'] },
      //     {
      //       name: 'folder-coverage',
      //       folderNames: [
      //         'coverage',
      //         '.nyc-output',
      //         '.nyc_output',
      //         'e2e',
      //         'it',
      //         'integration-test',
      //         'integration-tests',
      //         '__integration-test__',
      //         '__integration-tests__',
      //       ],
      //     },
      //     {
      //       name: 'folder-class',
      //       folderNames: [
      //         'class',
      //         'classes',
      //         'model',
      //         'models',
      //         'schemas',
      //         'schema',
      //       ],
      //     },
      //     {
      //       name: 'folder-other',
      //       folderNames: [
      //         'other',
      //         'others',
      //         'misc',
      //         'miscellaneous',
      //         'extra',
      //         'extras',
      //       ],
      //     },
      //     { name: 'folder-lua', folderNames: ['lua'] },
      //     {
      //       name: 'folder-typescript',
      //       folderNames: ['typescript', 'ts', 'typings', '@types', 'types'],
      //     },
      //     { name: 'folder-graphql', folderNames: ['graphql', 'gql'] },
      //     { name: 'folder-routes', folderNames: ['routes', 'router', 'routers'] },
      //     { name: 'folder-ci', folderNames: ['.ci', 'ci'] },
      //     {
      //       name: 'folder-benchmark',
      //       folderNames: [
      //         'benchmark',
      //         'benchmarks',
      //         'performance',
      //         'measure',
      //         'measures',
      //         'measurement',
      //       ],
      //     },
      //     {
      //       name: 'folder-messages',
      //       folderNames: [
      //         'messages',
      //         'messaging',
      //         'forum',
      //         'chat',
      //         'chats',
      //         'conversation',
      //         'conversations',
      //       ],
      //     },
      //     { name: 'folder-less', folderNames: ['less'] },
      //     {
      //       name: 'folder-gulp',
      //       folderNames: [
      //         'gulp',
      //         'gulpfile.js',
      //         'gulpfile.mjs',
      //         'gulpfile.ts',
      //         'gulpfile.babel.js',
      //       ],
      //     },
      //     {
      //       name: 'folder-python',
      //       folderNames: ['python', '__pycache__', '.pytest_cache'],
      //     },
      //     { name: 'folder-debug', folderNames: ['debug', 'debugging'] },
      //     { name: 'folder-fastlane', folderNames: ['fastlane'] },
      //     { name: 'folder-middleware', folderNames: ['middleware', 'middlewares'] },
      //     {
      //       name: 'folder-controller',
      //       folderNames: [
      //         'controller',
      //         'controllers',
      //         'service',
      //         'services',
      //         'provider',
      //         'providers',
      //         'handler',
      //         'handlers',
      //       ],
      //     },
      //     { name: 'folder-server', folderNames: ['server', 'servers', 'backend'] },
      //     {
      //       name: 'folder-client',
      //       folderNames: ['client', 'clients', 'frontend', 'pwa'],
      //     },
      //     { name: 'folder-tasks', folderNames: ['tasks', 'tickets'] },
      //     { name: 'folder-ios', folderNames: ['ios'] },
      //     { name: 'folder-upload', folderNames: ['uploads', 'upload'] },
      //     { name: 'folder-download', folderNames: ['downloads', 'download'] },
      //     { name: 'folder-tools', folderNames: ['tools'] },
      //     { name: 'folder-helper', folderNames: ['helpers', 'helper'] },
      //     { name: 'folder-serverless', folderNames: ['.serverless', 'serverless'] },
      //     { name: 'folder-batch', folderNames: ['batch', 'batchs', 'batches'] },
      //     { name: 'folder-buildkite', folderNames: ['buildkite', '.buildkite'] },
      //     { name: 'folder-cluster', folderNames: ['cluster', 'clusters'] },
      //     {
      //       name: 'folder-command',
      //       folderNames: ['command', 'commands', 'cmd', 'cli', 'clis'],
      //     },
      //     { name: 'folder-constant', folderNames: ['constant', 'constants'] },
      //     {
      //       name: 'folder-container',
      //       folderNames: ['container', 'containers', '.devcontainer'],
      //     },
      //     { name: 'folder-content', folderNames: ['content', 'contents'] },
      //     { name: 'folder-context', folderNames: ['context', 'contexts'] },
      //     { name: 'folder-core', folderNames: ['core'] },
      //     { name: 'folder-delta', folderNames: ['delta', 'deltas', 'changes'] },
      //     { name: 'folder-dump', folderNames: ['dump', 'dumps'] },
      //     {
      //       name: 'folder-examples',
      //       folderNames: [
      //         'demo',
      //         'demos',
      //         'example',
      //         'examples',
      //         'sample',
      //         'samples',
      //         'sample-data',
      //       ],
      //     },
      //     {
      //       name: 'folder-environment',
      //       folderNames: [
      //         '.env',
      //         '.environment',
      //         'env',
      //         'envs',
      //         'environment',
      //         'environments',
      //         '.venv',
      //       ],
      //     },
      //     {
      //       name: 'folder-functions',
      //       folderNames: [
      //         'func',
      //         'funcs',
      //         'function',
      //         'functions',
      //         'lambda',
      //         'lambdas',
      //         'logic',
      //         'math',
      //         'maths',
      //         'calc',
      //         'calcs',
      //         'calculation',
      //         'calculations',
      //       ],
      //     },
      //     {
      //       name: 'folder-generator',
      //       folderNames: [
      //         'generator',
      //         'generators',
      //         'generated',
      //         'cfn-gen',
      //         'gen',
      //         'gens',
      //         'auto',
      //       ],
      //     },
      //     {
      //       name: 'folder-hook',
      //       folderNames: ['hook', 'hooks', 'trigger', 'triggers'],
      //     },
      //     { name: 'folder-job', folderNames: ['job', 'jobs'] },
      //     {
      //       name: 'folder-keys',
      //       folderNames: ['keys', 'key', 'token', 'tokens', 'jwt'],
      //     },
      //     { name: 'folder-layout', folderNames: ['layout', 'layouts', '_layouts'] },
      //     {
      //       name: 'folder-mail',
      //       folderNames: ['mail', 'mails', 'email', 'emails', 'smtp', 'mailers'],
      //     },
      //     { name: 'folder-mappings', folderNames: ['mappings', 'mapping'] },
      //     { name: 'folder-meta', folderNames: ['meta'] },
      //     {
      //       name: 'folder-packages',
      //       folderNames: ['package', 'packages', 'pkg', 'pkgs'],
      //     },
      //     { name: 'folder-shared', folderNames: ['shared', 'common'] },
      //     {
      //       name: 'folder-shader',
      //       folderNames: ['glsl', 'hlsl', 'shader', 'shaders'],
      //     },
      //     { name: 'folder-stack', folderNames: ['stack', 'stacks'] },
      //     { name: 'folder-template', folderNames: ['template', 'templates'] },
      //     {
      //       name: 'folder-utils',
      //       folderNames: ['util', 'utils', 'utility', 'utilities'],
      //     },
      //     { name: 'folder-private', folderNames: ['private', '.private'] },
      //     { name: 'folder-error', folderNames: ['error', 'errors', 'err'] },
      //     { name: 'folder-event', folderNames: ['event', 'events'] },
      //     {
      //       name: 'folder-secure',
      //       folderNames: [
      //         'auth',
      //         'authentication',
      //         'secure',
      //         'security',
      //         'cert',
      //         'certs',
      //         'certificate',
      //         'certificates',
      //         'ssl',
      //       ],
      //     },
      //     { name: 'folder-custom', folderNames: ['custom', 'customs'] },
      //     {
      //       name: 'folder-mock',
      //       folderNames: [
      //         'mock',
      //         'mocks',
      //         'fixture',
      //         'fixtures',
      //         'draft',
      //         'drafts',
      //         'concept',
      //         'concepts',
      //         'sketch',
      //         'sketches',
      //       ],
      //     },
      //     {
      //       name: 'folder-syntax',
      //       folderNames: ['syntax', 'syntaxes', 'spellcheck'],
      //     },
      //     { name: 'folder-vm', folderNames: ['vm', 'vms'] },
      //     { name: 'folder-stylus', folderNames: ['stylus'] },
      //     { name: 'folder-flow', folderNames: ['flow-typed'] },
      //     {
      //       name: 'folder-rules',
      //       folderNames: [
      //         'rule',
      //         'rules',
      //         'validation',
      //         'validations',
      //         'validator',
      //         'validators',
      //       ],
      //     },
      //     {
      //       name: 'folder-review',
      //       folderNames: ['review', 'reviews', 'revisal', 'revisals', 'reviewed'],
      //     },
      //     { name: 'folder-guard', folderNames: ['guard', 'guards'] },
      //     { name: 'folder-prisma', folderNames: ['prisma'] },
      //     { name: 'folder-pipe', folderNames: ['pipe', 'pipes'] },
      //     { name: 'folder-svg', folderNames: ['svg', 'svgs'] },
      //     {
      //       name: 'folder-vuex-store',
      //       folderNames: ['store'],
      //       enabledFor: [IconPack.Vuex],
      //     },
      //     {
      //       name: 'folder-nuxt',
      //       folderNames: ['nuxt', '.nuxt'],
      //       enabledFor: [IconPack.Vuex, IconPack.Vue],
      //     },
      //     {
      //       name: 'folder-vue-directives',
      //       folderNames: ['directives'],
      //       enabledFor: [IconPack.Vuex, IconPack.Vue],
      //     },
      //     {
      //       name: 'folder-vue',
      //       folderNames: ['components'],
      //       enabledFor: [IconPack.Vuex, IconPack.Vue],
      //     },
      //     { name: 'folder-terraform', folderNames: ['terraform', '.terraform'] },
      //     {
      //       name: 'folder-mobile',
      //       folderNames: ['mobile', 'mobiles', 'portable', 'portability'],
      //     },
      //     { name: 'folder-stencil', folderNames: ['.stencil'] },
      //     { name: 'folder-firebase', folderNames: ['firebase', '.firebase'] },
      //     { name: 'folder-svelte', folderNames: ['svelte', '.svelte-kit'] },
      //     {
      //       name: 'folder-update',
      //       folderNames: ['update', 'updates', 'upgrade', 'upgrades'],
      //     },
      //     { name: 'folder-intellij', folderNames: ['.idea'], light: true },
      //     { name: 'folder-mjml', folderNames: ['mjml'] },
      //     { name: 'folder-scala', folderNames: ['scala'] },
      //     {
      //       name: 'folder-connection',
      //       folderNames: [
      //         'connection',
      //         'connections',
      //         'integration',
      //         'integrations',
      //       ],
      //     },
      //     { name: 'folder-quasar', folderNames: ['.quasar'] },
      //     { name: 'folder-next', folderNames: ['.next'] },
      //     { name: 'folder-cobol', folderNames: ['cobol'] },
      //     { name: 'folder-yarn', folderNames: ['yarn', '.yarn'] },
      //     { name: 'folder-husky', folderNames: ['husky', '.husky'] },
      //     {
      //       name: 'folder-storybook',
      //       folderNames: ['.storybook', 'storybook', 'stories', '__stories__'],
      //     },
      //     { name: 'folder-base', folderNames: ['base', '.base', 'bases'] },
      //     {
      //       name: 'folder-cart',
      //       folderNames: ['cart', 'shopping-cart', 'shopping', 'shop'],
      //     },
      //     {
      //       name: 'folder-home',
      //       folderNames: ['home', '.home', 'start', '.start'],
      //     },
      //     {
      //       name: 'folder-project',
      //       folderNames: ['project', 'projects', '.project', '.projects'],
      //     },
      //     {
      //       name: 'folder-interface',
      //       folderNames: ['interface', 'interfaces'],
      //     },
      //     {
      //       name: 'folder-contract',
      //       folderNames: [
      //         'pact',
      //         'pacts',
      //         'contract',
      //         '.contract',
      //         'contracts',
      //         'contract-testing',
      //         'contract-test',
      //         'contract-tests',
      //       ],
      //     },
      //     {
      //       name: 'folder-queue',
      //       folderNames: ['queue', 'queues', 'bull', 'mq'],
      //     },
      //     {
      //       name: 'folder-vercel',
      //       folderNames: ['vercel', '.vercel', 'now', '.now'],
      //     },
      //     {
      //       name: 'folder-cypress',
      //       folderNames: ['cypress', '.cypress'],
      //     },
      //     {
      //       name: 'folder-java',
      //       folderNames: ['java'],
      //     },
      //     {
      //       name: 'folder-resolver',
      //       folderNames: ['resolver', 'resolvers'],
      //     },
      //     {
      //       name: 'folder-unity',
      //       folderNames: ['unity'],
      //     },
    ],
  },
  {
    name: 'classic',
    defaultIcon: { name: 'folder' },
    rootFolder: { name: 'folder-root' },
  },
  { name: 'none', defaultIcon: { name: '' } },
];
