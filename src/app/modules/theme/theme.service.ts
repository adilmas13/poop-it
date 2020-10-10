import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'
import { BehaviorSubject, Subscription } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly theme$: BehaviorSubject<string>
  private readonly themeSubscription: Subscription
  private renderer: Renderer2

  private readonly THEME_KEY = 'theme'
  private readonly LIGHT_THEME = 'theme-light'
  private readonly DARK_THEME = 'theme-dark'

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)
    this.theme$ = new BehaviorSubject(this.getCurrentTheme())
    this.themeSubscription = this.theme$.subscribe(theme => this.renderer.addClass(document.body, theme))
  }

  getCurrentTheme = () => {
    const theme = localStorage.getItem(this.THEME_KEY)
    return theme ? theme.toString() : this.LIGHT_THEME
  }

  toggleTheme = () => {
    const theme = this.getCurrentTheme()
    let newTheme = this.LIGHT_THEME
    if (theme === this.LIGHT_THEME) {
      newTheme = this.DARK_THEME
    }
    this.removeCss(theme)
    localStorage.setItem(this.THEME_KEY, newTheme)
    this.theme$.next(newTheme)
  }

  destroy = () => {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe()
    }
  }

  private removeCss = (theme: string) => this.renderer.removeClass(document.body, theme)

}
