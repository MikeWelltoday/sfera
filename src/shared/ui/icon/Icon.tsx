import { svgSprite } from '@/shared'

type IconProps = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icon = ({ className, height, iconId, viewBox, width }: IconProps) => {
  return (
    <svg
      className={className}
      height={height || '16'}
      viewBox={viewBox || '0 0 24 24'}
      width={width || '16'}
    >
      <use xlinkHref={`${svgSprite}#${iconId}`} />
    </svg>
  )
}
