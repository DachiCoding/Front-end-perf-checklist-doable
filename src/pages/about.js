import React from 'react'
import Link from 'gatsby-link'

const REFERNCES = [
    {
        name: 'Front End Performance Checklist',
        href: 'https://github.com/thedaviddias/Front-End-Performance-Checklist'
    }, {
        name: 'Front End Performance Checklist中文版',
        href: 'https://github.com/JohnsenZhou/Front-End-Performance-Checklist'
    }, {
        name: 'Front End Checklist',
        href: 'https://github.com/thedaviddias/Front-End-Checklist#---------front-end-checklist-'
    }, {
        name: 'Front End Design Checklist',
        href: 'https://github.com/thedaviddias/Front-End-Design-Checklist#front-end-design-checklist'
    }
]

const Page = () => (
  <div>
    <h3>关于</h3>
    <h4>Why this project</h4>
    <ul>
        <li>在前端开发、设计中有一份参考来避免犯下低级的代码或者性能错误</li>
        <li>已经有了现成的checklist为什么还要做这个? &nbsp;1.提供一个可以互动的版本提升使用体验&nbsp;&nbsp;2.自动生成webpack配置功能加速优化效率 </li>
    </ul>
    <h4>参考资料</h4>
    <ul>
        {REFERNCES.map((ref) => {
            return (
            <li key={ref.name}>
                <a href={ref.href} target="_blank">{ref.name}</a>
            </li>
            );
        })}
    </ul>
  </div>
)

export default Page
