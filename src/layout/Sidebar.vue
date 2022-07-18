<script setup lang="ts">
import * as _ from 'lodash'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n-composable'
import type { Menu } from 'element-ui'
import { useRouter } from '@/common/utils'

const router = useRouter()
const { t } = useI18n()

interface MenuItem {
  index: string
  path: string
  children?: MenuItem[]
  includes?: MenuItem[]
}

const MENU: MenuItem[] = [
  {
    index: '1',
    path: '/meta/',
    children: [{ index: '1-1', path: '/meta/table/list' }],
  },
  {
    index: '4',
    path: '/transfer/',
    children: [{ index: '4-1', path: '/transfer/schema/list' }],
  },
]

const menu = ref<Menu | null>(null)

onMounted(() => {
  const currentRoute: string = router.currentRoute.path

  let openedMenus, activedIndex
  const menuItem = _.find(MENU, (item) => _.includes(currentRoute, item.path))
  if (menuItem) {
    openedMenus = [menuItem.index]
    activedIndex = menuItem.index
  }

  _.forEach(MENU, (menuItem) => {
    if (_.has(menuItem, 'children')) {
      const childItem = _.find(menuItem.children, (item) => _.includes(currentRoute, item.path))
      if (childItem) {
        openedMenus = [menuItem.index]
        activedIndex = childItem.index
        return false
      }
    }

    if (_.has(menuItem, 'includes')) {
      const includeItem = _.find(menuItem.includes, (item) => _.includes(currentRoute, item.path))
      if (includeItem) {
        openedMenus = [menuItem.index]
        activedIndex = menuItem.index
        return false
      }
    }
  })

  // if (menu !== null) {
  //   menu.openedMenus = openedMenus
  //   menu.activedIndex = activedIndex
  // }
})

function handleSelect(key: string) {
  let path = ''

  _.forEach(MENU, (menuItem) => {
    if (menuItem.index === key) {
      path = menuItem.path
      return false
    }

    _.forEach(_.get(menuItem, 'children', []), (childItem) => {
      if (childItem.index === key) {
        path = childItem.path
        return false
      }
    })

    if (path) {
      return false
    }
  })

  path = '/dashboard' + path
  if (router.currentRoute.fullPath !== path) {
    router.push({ path })
  }
}
</script>

<template>
  <div class="sidebar">
    <el-menu
      ref="menu"
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-receiving menu-icon"></i>
          {{ t('menu.metadata') }}
        </template>
        <el-menu-item index="1-1">{{ t('menu.metadataTableList') }}</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-connection menu-icon"></i>
          {{ t('menu.transfer') }}
        </template>
        <el-menu-item index="4-1">{{ t('menu.transferSchemaList') }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="less">
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  padding-top: 60px;

  .el-menu {
    height: 100%;
    border: none;
  }

  .menu-icon {
    color: rgba(255, 255, 255, 0.8);
    margin: -3px 2px 0 -10px;
    font-size: 16px;
  }
}
</style>
