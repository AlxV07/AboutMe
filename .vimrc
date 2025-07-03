" === General ===
set history=100
set number
filetype on
syntax on
"colorscheme desert

" === Coding ===
" auto indent code
set autoindent  
" show matching (), [], & {}
set showmatch  	
" toggle number lines
nnoremap Zn :set invnumber<CR>

" === Tabs ===
" tab visually appears as 8 spaces (differentiate between tab & space)
set tabstop=8
" shiftwidth = 4 spaces 
set shiftwidth=4 smarttab
" only use space, not tab
set expandtab


" === Searching ===
" starts searching incrementally
set incsearch
" highlight while searching
set hlsearch

" === Command Line  ===
" tab completion for command line
set wildmenu
" longest display
set wildmode=list:longest

" === C++ ===
" auto-bracket
inoremap { {<CR>}<Esc>ko  
" default for loop
nnoremap Zf ifor (int i = 0; i < N; i++)<Esc>
" int pair
nnoremap Zp ipair<int, int><Esc>

" === Python ===
" main
nnoremap Zm iif __name__ == '__main__':<CR><esc>
" input
nnoremap Zi imap(int, input().split())

