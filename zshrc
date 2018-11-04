source /Users/maxweldsouza/.bash_profile
export NVM_NO_USE=false
export NVM_AUTO_USE=false
export NVM_LAZY_LOAD=false

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=/Users/maxweldsouza/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="spaceship"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
	git 
	common-aliases 
	npm 
	alias-tips 
	zsh-autosuggestions 
	extract 
	colored-man-pages
    kubectl
    docker
    zsh-nvm
    zsh-better-npm-completion
)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias top= "sudo htop"

# OPAM configuration
. /Users/maxweldsouza/.opam/opam-init/init.zsh > /dev/null 2> /dev/null || true


# Alt + Forward/Back to move whole words at a time
bindkey -e; bindkey '\e\e[C' forward-word; bindkey '\e\e[D' backward-word
export PATH="/usr/local/opt/mongodb@3.2/bin:$PATH"

# aws cli
export PATH=~/.local/bin:$PATH

# no duplicates in history
# setopt histignorealldups 

# # Vi mode
# # for bash use
# # set -o vi
# bindkey -v
# KEYTIMEOUT=1
# ### Plugin Configuration {{{
#   ## Plugin: History-Substring-Search {{
#     # Bind UP and DOWN arrow keys
#     zmodload zsh/terminfo
#     bindkey "$terminfo[kcuu1]" history-substring-search-up
#     bindkey "$terminfo[kcud1]" history-substring-search-down
#     # Bind UP and DOWN arrow keys (compatibility fallback
#     # for Ubuntu 12.04, Fedora 21, and MacOSX 10.9 users)
#     bindkey '^[[A' history-substring-search-up
#     bindkey '^[[B' history-substring-search-down
#     # Bind P and N for EMACS mode
#     bindkey -M emacs '^P' history-substring-search-up
#     bindkey -M emacs '^N' history-substring-search-down
#     # Bind k and j for VI mode
#     bindkey -M vicmd 'k' history-substring-search-up
#     bindkey -M vicmd 'j' history-substring-search-down
#   ## }}
#   ## Plugin: Autosuggestions {{
#     # Use ctrl+t to toggle autosuggestions(hopefully this wont be needed as
#     # zsh-autosuggestions is designed to be unobtrusive)
#     # bindkey '^T' autosuggest-toggle
#     # Accept suggestions without leaving insert mode
#     bindkey '^f' vi-forward-blank-word
#   ## }}
# ### }}}

alias ll="exa -l"
alias instatus="echo 172.31.220.33"
alias gfirst="git log --oneline --reverse | head -n 1"
alias gm="git commit -m"
alias gds="git diff --staged"
alias cat="ccat"

SPACESHIP_PACKAGE_SHOW="false"
SPACESHIP_KUBECONTEXT_SHOW="false"
source /usr/local/share/zsh-history-substring-search/zsh-history-substring-search.zsh

RED='\033[0;31m'
YELLOW='\033[0;33m'
PURPLE='\033[0;35m' 
NC='\033[0m' 
SPACESHIP_GIT_STATUS_PREFIX="["
SPACESHIP_GIT_STATUS_SUFFIX="]"
SPACESHIP_GIT_STATUS_COLOR="white"
SPACESHIP_GIT_STATUS_UNTRACKED="?"
SPACESHIP_GIT_STATUS_ADDED="${YELLOW}+${NC}"
SPACESHIP_GIT_STATUS_MODIFIED="${YELLOW}!${NC}"
SPACESHIP_GIT_STATUS_RENAMED="»"
SPACESHIP_GIT_STATUS_DELETED="${RED}✘${NC}"
SPACESHIP_GIT_STATUS_STASHED=""
SPACESHIP_GIT_STATUS_UNMERGED="="
SPACESHIP_GIT_STATUS_AHEAD="${PURPLE}⇡${NC}"
SPACESHIP_GIT_STATUS_BEHIND="${PURPLE}⇣${NC}"
SPACESHIP_GIT_STATUS_DIVERGED="${PURPLE}⇕${NC}"

cd ~/work

# tabtab source for serverless package
# uninstall by removing these lines or running `tabtab uninstall serverless`
[[ -f /Users/maxweldsouza/Work/insider-serverless-api/algolia-indexing/node_modules/tabtab/.completions/serverless.zsh ]] && . /Users/maxweldsouza/Work/insider-serverless-api/algolia-indexing/node_modules/tabtab/.completions/serverless.zsh
# tabtab source for sls package
# uninstall by removing these lines or running `tabtab uninstall sls`
[[ -f /Users/maxweldsouza/Work/insider-serverless-api/algolia-indexing/node_modules/tabtab/.completions/sls.zsh ]] && . /Users/maxweldsouza/Work/insider-serverless-api/algolia-indexing/node_modules/tabtab/.completions/sls.zsh

  # Set Spaceship ZSH as a prompt
  autoload -U promptinit; promptinit
  prompt spaceship

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"
source ~/.iterm2_shell_integration.zsh
