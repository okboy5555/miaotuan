module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'docs',
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'feat', // 新增feature
        'fix', // 修复bug
        'merge',
        'perf', // 优化
        'refactor', // 代码重构：没有加新功能或者修复bug
        'revert', // 回滚
        'style', // prettier
        'test'
      ]
    ]
  }
}
