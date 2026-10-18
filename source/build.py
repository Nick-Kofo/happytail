import base64
def d(f,m): return 'data:'+m+';base64,'+base64.b64encode(open(f,'rb').read()).decode()
h=open('template.html').read()
for k,f,m in [('LOGO','assets/logo-t.png','image/png'),('PAWG','assets/paw-green.png','image/png'),('PAW','assets/paw.png','image/png'),('STORE','assets/store.jpg','image/jpeg'),('SHELVES','assets/shelves.jpg','image/jpeg')]:
  h=h.replace('{{'+k+'}}',d(f,m))
h=h.replace('{{VINTRO}}',base64.b64encode(open('video/intro.mp4','rb').read()).decode())
h=h.replace('{{VIDLE}}',base64.b64encode(open('video/idle.mp4','rb').read()).decode())
for k,f in [('PFIRST','video/intro-first.jpg'),('PLAST','video/intro-last.jpg'),('PIDLE','video/idle-first.jpg')]:
  h=h.replace('{{'+k+'}}','data:image/jpeg;base64,'+base64.b64encode(open(f,'rb').read()).decode())
assert '{{' not in h
open('../index.html','w').write(h)
