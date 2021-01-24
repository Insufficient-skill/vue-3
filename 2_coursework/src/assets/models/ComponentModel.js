import AppTitle from '@/components/AppTitle'
import AppAvatar from '@/components/AppAvatar'
import AppSubtitle from '@/components/AppSubtitle'
import AppTextBlock from '@/components/AppTextBlock'

class ComponentModel {}

ComponentModel.Title = {
  id: 1,
  type: 'title',
  component: AppTitle,
  propName: 'text'
}

ComponentModel.Avatar = {
  id: 2,
  type: 'avatar',
  component: AppAvatar,
  propName: 'src'
}

ComponentModel.Subtitle = {
  id: 3,
  type: 'subtitle',
  component: AppSubtitle,
  propName: 'text'
}

ComponentModel.TextBlock = {
  id: 4,
  type: 'text',
  component: AppTextBlock,
  propName: 'text'
}

ComponentModel.TYPE_TO_DATA = {
  [ComponentModel.Title.type]: ComponentModel.Title,
  [ComponentModel.Avatar.type]: ComponentModel.Avatar,
  [ComponentModel.Subtitle.type]: ComponentModel.Subtitle,
  [ComponentModel.TextBlock.type]: ComponentModel.TextBlock
}

export default ComponentModel
